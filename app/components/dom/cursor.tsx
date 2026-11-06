"use client";

import { useEffect, useRef } from "react";

const FACES = { idle: ">_<", link: "^_^", press: "x_x", blink: "-_-" };

// things that should make the mascot look happy
const INTERACTIVE = 'a, button, [role="button"], summary, label, .cursor-pointer, [data-cursor="hover"]';
// places where the normal system cursor should come back (typing, etc.)
const NATIVE = 'input, textarea, select, [contenteditable="true"], [data-cursor="native"]';

export default function MascotCursor({ hideNative = true }: { hideNative?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // mouse and trackpad only, never touch screens
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    if (hideNative) root.classList.add("mascot-cursor");

    let x = 0, y = 0;     // where the mascot is (smoothed)
    let tx = 0, ty = 0;   // where the real pointer is
    let s = 1;            // current scale (smoothed)
    let seen = false;
    let face = FACES.idle;
    let hovering = false;
    let pressed = false;
    let nextBlink = performance.now() + 2500;
    let blinkUntil = 0;
    let raf = 0;

    const setFace = (f: string) => {
      if (f !== face) {
        face = f;
        el.textContent = f;
      }
    };

    const frame = (now: number) => {
      const px = x;
      const follow = reduce ? 1 : 0.7; // 1 = glued to the pointer
      x += (tx - x) * follow;
      y += (ty - y) * follow;

      const tilt = reduce ? 0 : Math.max(-25, Math.min(25, (x - px) * 1.2));
      const targetScale = pressed ? 0.85 : hovering ? 1.1 : 1;
      s += (targetScale - s) * (reduce ? 1 : 0.2);

      if (!reduce && now > nextBlink) {
        blinkUntil = now + 130;
        nextBlink = now + 2500 + Math.random() * 3000;
      }

      setFace(
        pressed ? FACES.press : hovering ? FACES.link : now < blinkUntil ? FACES.blink : FACES.idle
      );

      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${tilt}deg) scale(${s})`;
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        x = tx;
        y = ty;
        seen = true;
      }
      const target = e.target as Element | null;
      const native = !!target?.closest?.(NATIVE);
      hovering = !native && !!target?.closest?.(INTERACTIVE);
      el.style.opacity = native ? "0" : "1";
      root.classList.toggle("mascot-native", native);
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") pressed = true;
    };
    const onUp = () => {
      pressed = false;
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("blur", onUp);
    root.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onUp);
      root.removeEventListener("mouseleave", onLeave);
      root.classList.remove("mascot-cursor", "mascot-native");
    };
  }, [hideNative]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 select-none font-mono text-2xl font-bold text-white mix-blend-difference"
      style={{ opacity: 0, willChange: "transform" }}
    >
      {">_<"}
    </div>
  );
}
