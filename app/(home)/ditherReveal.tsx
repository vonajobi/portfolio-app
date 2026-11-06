"use client";

import { useEffect, useRef } from "react";

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

// colors
const PALETTE = ["#f2777a", "#ffcc66", "#99cc99", "#66cccc", "#6699cc", "#cc99cc"];

const toRgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

// --- small 3D value noise (x, y, and time) ---
const hash = (x: number, y: number, z: number) => {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const noise = (x: number, y: number, z: number) => {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const w = zf * zf * (3 - 2 * zf);
  return lerp(
    lerp(lerp(hash(xi, yi, zi), hash(xi + 1, yi, zi), u), lerp(hash(xi, yi + 1, zi), hash(xi + 1, yi + 1, zi), u), v),
    lerp(lerp(hash(xi, yi, zi + 1), hash(xi + 1, yi, zi + 1), u), lerp(hash(xi, yi + 1, zi + 1), hash(xi + 1, yi + 1, zi + 1), u), v),
    w
  );
};

const fbm = (x: number, y: number, z: number) => {
  let sum = 0, amp = 0.5, f = 1;
  for (let o = 0; o < 3; o++) {
    sum += amp * noise(x * f, y * f, z * f);
    f *= 2;
    amp *= 0.5;
  }
  return sum / 0.875;
};

type Props = {
  cell?: number;      // dot cell size in px (bigger = chunkier and faster)
  color?: string;     // color of the smoke dots
  colors?: string[];  // colors of the hover/tap glow
  radius?: number;    // size of the glow in px
  life?: number;      // ms before the glow fades away
  speed?: number;     // 1 = default drift
  scale?: number;     // smoke size: smaller = bigger shapes
  className?: string;
};

export default function DitherSmoke({
  cell = 4,
  color = "#ffffff",
  colors = PALETTE,
  radius = 130,
  life = 900,
  speed = 1,
  scale = 0.03,
  className = "fixed inset-0 pointer-events-none",
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const make = () => document.createElement("canvas");
    const low = make();   // 1 pixel per dot cell
    const mask = make();  // grid of round dots, built once
    const dots = make();  // finished smoke dots
    const holes = make(); // colored glow trail
    const tint = make();  // glow turned into colored dots
    const lctx = low.getContext("2d")!;
    const mctx = mask.getContext("2d")!;
    const dctx = dots.getContext("2d")!;
    const hctx = holes.getContext("2d")!;
    const tctx = tint.getContext("2d")!;

    const rgb = colors.map(toRgb);
    const colorAt = (u: number) => {
      const p = (((u % 1) + 1) % 1) * rgb.length;
      const i = Math.floor(p);
      const f = p - i;
      const a = rgb[i];
      const b = rgb[(i + 1) % rgb.length];
      return `${Math.round(lerp(a[0], b[0], f))},${Math.round(lerp(a[1], b[1], f))},${Math.round(lerp(a[2], b[2], f))}`;
    };

    let cols = 0;
    let rows = 0;
    let image: ImageData;
    const points: { x: number; y: number; t: number; c: string }[] = [];
    let raf = 0;
    let last = -1000;

    const setup = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);

      const W = Math.round(w * dpr);
      const H = Math.round(h * dpr);
      canvas.width = dots.width = holes.width = mask.width = tint.width = W;
      canvas.height = dots.height = holes.height = mask.height = tint.height = H;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      low.width = cols;
      low.height = rows;
      image = lctx.createImageData(cols, rows);

      mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mctx.clearRect(0, 0, w, h);
      mctx.fillStyle = "#fff";
      mctx.beginPath();
      const r = cell * 0.32;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = x * cell + cell / 2;
          const cy = y * cell + cell / 2;
          mctx.moveTo(cx + r, cy);
          mctx.arc(cx, cy, r, 0, Math.PI * 2);
        }
      }
      mctx.fill();
      last = -1000;
    };

    const renderDots = (t: number) => {
      const d = image.data;
      const z = t * 0.00015 * speed;
      const ox = t * 0.00004 * speed;
      const oy = -t * 0.00003 * speed;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const n = fbm(x * scale + ox, y * scale + oy, z);
          const v = Math.min(1, Math.max(0, (n - 0.38) * 2.6));
          const on = v > (BAYER[y & 3][x & 3] + 0.5) / 16;
          const i = (y * cols + x) * 4;
          d[i] = d[i + 1] = d[i + 2] = 255;
          d[i + 3] = on ? 255 : 0;
        }
      }
      lctx.putImageData(image, 0, 0);

      dctx.setTransform(1, 0, 0, 1, 0, 0);
      dctx.clearRect(0, 0, dots.width, dots.height);
      dctx.imageSmoothingEnabled = false;
      dctx.globalCompositeOperation = "source-over";
      dctx.drawImage(low, 0, 0, cols * cell * dpr, rows * cell * dpr);
      dctx.globalCompositeOperation = "destination-in";
      dctx.drawImage(mask, 0, 0);
      dctx.globalCompositeOperation = "source-in";
      dctx.fillStyle = color;
      dctx.fillRect(0, 0, dots.width, dots.height);
      dctx.globalCompositeOperation = "source-over";
    };

    const draw = (now: number) => {
        if (now - last > 33) {
            renderDots(now);
            last = now;
        }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(dots, 0, 0);

        while (points.length && now - points[0].t > life) points.shift();

    if (points.length) {
        // paint the glow trail as soft colored gradients
        hctx.setTransform(1, 0, 0, 1, 0, 0);
        hctx.clearRect(0, 0, holes.width, holes.height);
        for (const p of points) {
            const age = (now - p.t) / life;
            const r = radius * dpr * (1 - age * 0.5);
            const g = hctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
            g.addColorStop(0, `rgba(${p.c},${1 - age})`);
            g.addColorStop(0.55, `rgba(${p.c},${(1 - age) * 0.55})`);
            g.addColorStop(1, `rgba(${p.c},0)`);
            hctx.fillStyle = g;
            hctx.beginPath();
            hctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            hctx.fill();
        }

        // clear the smoke dots under the glow, then draw the glow itself
        ctx.globalCompositeOperation = "destination-out";
        ctx.drawImage(holes, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(holes, 0, 0);
    }
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onPoint = (e: PointerEvent) => {
      const now = performance.now();
      points.push({ x: e.clientX * dpr, y: e.clientY * dpr, t: now, c: colorAt(now * 0.0003) });
      if (points.length > 60) points.shift();
    };

    const onResize = () => {
      points.length = 0;
      setup();
      if (reduceMotion) draw(0);
    };

    setup();
    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPoint);
      window.addEventListener("pointerdown", onPoint);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPoint);
      window.removeEventListener("pointerdown", onPoint);
      window.removeEventListener("resize", onResize);
    };
  }, [cell, color, colors, radius, life, speed, scale]);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
