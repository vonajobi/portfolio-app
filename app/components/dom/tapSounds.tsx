"use client";

import { useEffect } from "react";
import { initSound, play } from "../helpers/sound";

const TAPPABLE = 'a, button, [role="button"], summary, label, [data-cursor="hover"]';

export default function TapSounds() {
  useEffect(() => {
    initSound();
    let touch = false;

    const isTappable = (e: Event) => !!(e.target as Element | null)?.closest?.(TAPPABLE);

    const onDown = (e: PointerEvent) => {
      touch = e.pointerType !== "mouse";
      if (touch && isTappable(e)) play("tick");
    };
    const onClick = (e: MouseEvent) => {
      if (touch && isTappable(e)) play("pop");
    };

    window.addEventListener("pointerdown", onDown);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
