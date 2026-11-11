"use client";

import { useRef, useState } from "react";
import type { Media } from "@/app/projects/types";

export default function Gallery({ items }: { items: Media[] }) {
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  if (!items.length) return null;

  const hero = items[active];
  const others = items.map((m, i) => ({ m, i })).filter(({ i }) => i !== active);

  const choose = (i: number) => {
    setActive(i);
    // if the big image has scrolled out of view, bring it back
    const top = heroRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* the big image */}
      <div ref={heroRef} className="mx-auto max-w-5xl scroll-mt-28 ">
        <figure key={hero.src} className="">
          {hero.type === "video" ? (
            <video
              src={hero.src}
              aria-label={hero.alt}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-xl"
            />
          ) : (
            <img
              src={hero.src}
              alt={hero.alt}
              className="gallery-fade max-h-[80vh] w-full rounded-xl object-contain"
            />
          )}
          {hero.caption && (
            <figcaption className="mt-3 text-center text-sm text-white/50">{hero.caption}</figcaption>
          )}
        </figure>
      </div>

      {/* the rest: click one to make it the big image */}
      {others.length > 0 && (
        <section aria-label="More from this project" className="mt-16 columns-1 gap-4 md:columns-2">
          {others.map(({ m, i }) => (
            <button
              key={m.src}
              type="button"
              onClick={() => choose(i)}
              aria-label={`Show larger: ${m.alt}`}
              className="group mb-6 block w-full break-inside-avoid text-left"
            >
              {m.type === "video" ? (
                <video
                  src={m.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="pointer-events-none w-full rounded-xl transition group-hover:opacity-80"
                />
              ) : (
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="w-full rounded-xl transition group-hover:opacity-80"
                />
              )}
              {m.caption && <span className="mt-3 block text-xs text-white/50">{m.caption}</span>}
            </button>
          ))}
        </section>
      )}
    </>
  );
}
