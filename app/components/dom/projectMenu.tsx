"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const items = [
  { text: "[DESIGN]", value: "design" },
  { text: "[WEB DEV]", value: "dev" },
];

export default function ProjectsMenu() {
  const pathname = usePathname();
  const category = useSearchParams().get("category");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  // close when tapping outside the menu
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  // touch devices: first tap opens the menu, second tap follows the link
  const handleClick = (e: React.MouseEvent) => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch && !open) {
      e.preventDefault();
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <li ref={ref} className="relative group">
      <Link
        href="/projects"
        onClick={handleClick}
        className={`hover-effect ${pathname.startsWith("/projects") ? "" : ""}`}
      >
        {`[PROJECTS]`}
      </Link>

      <div
        className={`absolute left-0 mt-2 w-32 bg-black/80 backdrop-blur-sm rounded-sm shadow-lg transition-all duration-200 z-30
          group-hover:opacity-100 group-hover:visible
          group-focus-within:opacity-100 group-focus-within:visible
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {items.map((item) => (
          <Link
            key={item.value}
            href={`/projects?category=${item.value}`}
            onClick={() => setOpen(false)}
            className={`block px-4 py-2 text-xs transition-all ${
              category === item.value
                ? "text-white bg-white/10"
                : "text-white/75 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </li>
  );
}
