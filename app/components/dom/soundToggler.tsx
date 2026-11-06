"use client";

import { useEffect, useState } from "react";
import { initSound, isSoundOn, setSoundOn } from "../helpers/sound";

export default function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    initSound();
    setOn(isSoundOn());
  }, []);

  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => {
        setSoundOn(!on);
        setOn(!on);
      }}
      className="hover-effect"
    >
      SOUND [{on ? "ON" : "OFF"}]
    </button>
  );
}
