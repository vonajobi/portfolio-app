"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useSearchParams } from "next/navigation";
import SoundToggle from "./soundToggler";

const items = [
  { text: "[PROJECTS]", href: "/projects", sub: false, value: "" },
  { text: "DESIGN", href: "/projects?category=design", sub: true, value: "design" },
  { text: "WEB DEV", href: "/projects?category=dev", sub: true, value: "dev" },
  { text: "[SKETCHBOOK]", href: "/sketchbook", sub: false, value: "" },
];

const GRADIENT = "linear-gradient(90deg, #f2777a, #ffcc66, #99cc99, #66cccc, #6699cc, #cc99cc)";

// soft pastel glow for the close button
const SOFT_BG = [
  "radial-gradient(circle at 15% 20%, rgba(242,119,122,0.75), transparent 60%)",
  "radial-gradient(circle at 85% 25%, rgba(255,204,102,0.65), transparent 60%)",
  "radial-gradient(circle at 25% 85%, rgba(102,204,204,0.7), transparent 60%)",
  "radial-gradient(circle at 85% 85%, rgba(204,153,204,0.7), transparent 60%)",
].join(", ");

// two bars that morph between hamburger and X
function MenuIcon({ open }: { open: boolean }) {
  const bar =
    "absolute left-1/2 top-1/2 h-0.5 w-[22px] rounded-full bg-current transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none";
  return (
    <>
      <span
        aria-hidden="true"
        className={bar}
        style={{
          transform: `translate(-50%, -50%) translateY(${open ? 0 : -4}px) rotate(${open ? 45 : 0}deg)`,
        }}
      />
      <span
        aria-hidden="true"
        className={bar}
        style={{
          transform: `translate(-50%, -50%) translateY(${open ? 0 : 4}px) rotate(${open ? -45 : 0}deg)`,
        }}
      />
    </>
  );
}

export default function MobileMenu() {
  const pathname = usePathname();
  const category = useSearchParams().get("category");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pressed, setPressed] = useState<number | null>(null); // finger is down on this link
  const [tapped, setTapped] = useState<number | null>(null); // stays lit while the menu fades out
  const [closePressed, setClosePressed] = useState(false);

  useEffect(() => setMounted(true), []);

  // close whenever the page or filter changes
  useEffect(() => setOpen(false), [pathname, category]);

  // while open: lock page scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (item: (typeof items)[number]) => {
    if (item.href === "/sketchbook") return pathname.startsWith("/sketchbook");
    if (item.sub) return pathname.startsWith("/projects") && category === item.value;
    return pathname.startsWith("/projects") && !category; // PROJECTS (all)
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => {
          setTapped(null);
          setClosePressed(false);
          setOpen(true);
        }}
        className="md:hidden relative h-10 w-10 text-white/75 hover:text-white"
      >
        <MenuIcon open={false} />
      </button>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            aria-hidden={!open}
            style={{
              transitionDuration: open ? "400ms" : "450ms",
              transitionDelay: open ? "0ms" : "350ms", // wait for the bars to finish morphing
            }}
            className={`md:hidden fixed inset-0 z-50 flex flex-col overflow-y-auto backdrop-blur-lg transition-all motion-reduce:transition-none ${
              open ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {/* top bar, lined up with the real nav so nothing jumps */}
            <div className="flex items-center justify-between px-5 sm:px-10 pt-5 pb-5 text-white/75">
              <Link href="/" className="font-bold" onClick={() => setOpen(false)}>
                HOME
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                onPointerDown={() => setClosePressed(true)}
                onPointerCancel={() => setClosePressed(false)}
                onPointerLeave={() => setClosePressed(false)}
                className={`relative h-10 w-10 overflow-hidden rounded-md transition-all duration-200 motion-reduce:transition-none ${
                  closePressed
                    ? "text-white shadow-[0_0_18px_rgba(255,204,102,0.35)]"
                    : "text-white/75"
                }`}
              >
                {/* soft glow, fades in when pressed */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none ${
                    closePressed ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: SOFT_BG, backgroundColor: "rgba(255,255,255,0.08)" }}
                />
                <MenuIcon open={open} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col gap-3 px-5 pt-40 text-white/75 font-ubuntu uppercase">
              {items.map((item, i) => {
                const active = isActive(item);
                const lit = pressed === i || tapped === i;
                return (
                  <div
                    key={item.href}
                    style={{
                      transitionDuration: open ? "500ms" : "300ms",
                      transitionDelay: open
                        ? `${100 + i * 60}ms`
                        : `${(items.length - 1 - i) * 30}ms`, // bottom links leave first
                    }}
                    className={`transition-all motion-reduce:transition-none ${
                      item.sub ? "pl-6" : ""
                    } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setTapped(i);
                        setOpen(false);
                      }}
                      onPointerDown={() => setPressed(i)}
                      onPointerUp={() => setPressed(null)}
                      onPointerCancel={() => setPressed(null)}
                      onPointerLeave={() => setPressed(null)}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-block origin-left transition-transform duration-150 motion-reduce:transition-none ${
                        item.sub ? "text-lg" : "text-2xl font-bold"
                      } ${active ? "underline decoration-2 underline-offset-8" : ""} ${
                        lit ? "scale-105" : ""
                      }`}
                    >
                      {item.text}

                      {/* rainbow copy of the text that fades in on tap */}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-200 motion-reduce:transition-none ${
                          lit ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          background: GRADIENT,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {item.text}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div className="mt-auto flex items-end justify-between px-5 pb-8 pt-10 text-sm text-white/70">
              <SoundToggle />
              <span aria-hidden="true" className="font-mono text-2xl font-bold text-white/70">
                {">_<"}
              </span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
