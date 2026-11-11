"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

type Item = { id: string; label: string };

export function CaseStudyFrame({
  title,
  backHref = "/projects",
  nav = true,
  children,
}: {
  title: string;
  backHref?: string;
  nav?: boolean; // set false for simple pages with no side nav
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  // the side nav is built from every <section data-title="..."> on the page
  useEffect(() => {
    if (!nav) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-title]"));
    setItems(els.map((el) => ({ id: el.id, label: el.dataset.title ?? el.id })));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [nav]);

  return (
    <div
      className={`animate-slidein w-full px-0 pb-2 md:pb-24 pt-8 text-white text-sm sm:px-8 md:pt-20 ${
        nav ? "lg:grid lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-8" : ""
      }`}
    >
      {nav && (
        <aside className="hidden lg:block">
          <nav aria-label="Sections" className="sticky top-28">
            <Link href={backHref} className="text-xs uppercase tracking-widest text-white/60 hover:text-white">
              ← Back
            </Link>
            <p className="mt-6 text-xl font-bold uppercase leading-tight">{title}</p>
            <ul className="mt-6 space-y-3 text-xs uppercase tracking-widest">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      history.replaceState(null, "", `#${item.id}`);
                    }}
                    className={active === item.id ? "text-white" : "text-white/40 hover:text-white"}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

      <article className="mx-auto md:max-w-6xl rounded-md bg-[#1c1b1b] px-5 py-8 shadow-sm shadow-black">
        {children}
      </article>
    </div>
  );
}

// Role / Timeline / Skills row
export function Meta({ items }: { items: [string, string | string[]][] }) {
  return (
    <dl className="flex flex-wrap justify-center gap-x-14 gap-y-6">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt className="text-xs uppercase tracking-widest bg-white/10 w-fit px-1 py-1 rounded-sm text-white/50">{label}</dt>
          <dd className="mt-2 text-white text-sm">
            {Array.isArray(value) ? value.map((v) => <div key={v}>{v}</div>) : value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
