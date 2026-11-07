const KEY = "sound";
const VOLUME = 0.8; // master volume, 0 to 1

// pentatonic notes (C5 D5 E5 G5 A5 C6): moving across items makes little melodies that never clash
const SCALE = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];

let ctx: AudioContext | null = null;
let on = false;
let wired = false;
const lastPlayed: Record<string, number> = {};

export const isSoundOn = () => on;

const getCtx = () => {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state !== "running") ctx.resume().catch(() => {});
  return ctx;
};

// browsers only allow audio after a tap or key press, so unlock on the first one
export function initSound() {
  if (typeof window === "undefined") return;
  try {
    on = localStorage.getItem(KEY) === "on";
  } catch {}
  if (wired) return;
  wired = true;

  const events = ["pointerdown", "pointerup", "touchend", "click", "keydown"];
  const unlock = () => {
    if (!on) return;
    const c = getCtx();
    if (!c) return;
    // iOS wants a real (silent) sound started inside the gesture
    try {
      const src = c.createBufferSource();
      src.buffer = c.createBuffer(1, 1, 22050);
      src.connect(c.destination);
      src.start(0);
    } catch {}
    if (c.state === "running") {
      events.forEach((e) => window.removeEventListener(e, unlock));
    }
  };
  events.forEach((e) => window.addEventListener(e, unlock));
}

export function setSoundOn(v: boolean) {
  on = v;
  try {
    localStorage.setItem(KEY, v ? "on" : "off");
  } catch {}
  if (v) play("pop"); // called from a tap, so the browser allows the audio engine to start
}

type ToneOpts = { type?: OscillatorType; gain?: number; slideTo?: number; delay?: number };

function tone(freq: number, dur: number, o: ToneOpts = {}) {
  if (!ctx) return;
  const t0 = ctx.currentTime + (o.delay ?? 0);
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = o.type ?? "sine";
  osc.frequency.setValueAtTime(freq, t0);
  if (o.slideTo) osc.frequency.exponentialRampToValueAtTime(o.slideTo, t0 + dur);
  const peak = (o.gain ?? 0.08) * VOLUME;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

export type SoundName = "tick" | "squish" | "pop" | "blink" | "sleep" | "wake";

export function play(name: SoundName, retried = false) {
  if (!on) return;
  const c = getCtx();
  if (!c) return;

  // phones start "suspended": wake the engine, then try once more
  if (c.state !== "running") {
    if (!retried) c.resume().then(() => play(name, true)).catch(() => {});
    return;
  }

  // don't let the same sound machine-gun
  const now = performance.now();
  if (now - (lastPlayed[name] ?? 0) < 60) return;
  lastPlayed[name] = now;

  switch (name) {
    case "tick": // a soft random note from the scale
      tone(SCALE[Math.floor(Math.random() * SCALE.length)], 0.09, { type: "triangle", gain: 0.05 });
      break;
    case "squish": // short, low, dropping
      tone(240, 0.1, { type: "square", gain: 0.03, slideTo: 110 });
      break;
    case "pop": // quick bubbly drop
      tone(750, 0.1, { gain: 0.1, slideTo: 260 });
      break;
    case "blink": // tiny click
      tone(1500, 0.03, { gain: 0.015 });
      break;
    case "sleep": // two sleepy falling notes
      tone(659.25, 0.25, { gain: 0.04 });
      tone(523.25, 0.4, { gain: 0.04, delay: 0.2 });
      break;
    case "wake": // surprised little chirp up
      tone(500, 0.12, { gain: 0.07, slideTo: 1000 });
      break;
  }
}
