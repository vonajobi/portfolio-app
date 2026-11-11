import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyFrame } from "@/app/components/layout/caseStudyFrame";
import { getProject, nextProject, projects } from "@/app/projects/data";
import type { Media } from "@/app/projects/types";
import { FiArrowUpRight } from 'react-icons/fi'
import Gallery from "@/app/components/layout/gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: Array.isArray(p.summary) ? p.summary.join(" ") : p.summary,
  };
}

const asList = (b: string | string[]) => (Array.isArray(b) ? b : [b]);
const linkStyle = "text-white/50 no-underline transition-colors hover:text-white";

// one image or video, with rounded corners
function Figure({ m, centered = false }: { m: Media; centered?: boolean }) {
  return (
    <figure>
      {m.type === "video" ? (
        <video
          src={m.src}
          aria-label={m.alt}
          autoPlay={m.autoPlay}
          muted={m.autoPlay}
          loop={m.autoPlay}
          controls={!m.autoPlay}
          playsInline
          preload="metadata"
          className="w-full rounded-xl"
        />
      ) : (
        <img src={m.src} alt={m.alt} loading="lazy" className="w-full rounded-md" />
      )}
      {m.caption && (
        <figcaption className={`mt-3 text-white/50 ${centered ? "text-center text-sm" : "text-xs"}`}>
          {m.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const [hero, ...rest] = p.gallery;

  const meta: [string, string][] = [
    ["Year", String(p.year)],
    ["Role", p.meta.role],
  ];
  if (p.meta.tools?.length) meta.push(["Skills & Tools", p.meta.tools.join(", ")]);

  return (
    <CaseStudyFrame title={p.title} nav={false}>
      {/* HEADER: title on the left, summary and links on the right */}
      <header className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-white/50">{p.tags.join(" / ")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl">{p.title}</h1>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-col gap-4">
              {asList(p.summary).map((s, i) => (
                <p key={i} className="mt-0">
                  {s}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {p.demo && (
                <a
                  href={p.demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/50 no-underline transition-colors hover:text-white"
                >
                  {p.demo.label ?? "Live demo"}
                  <FiArrowUpRight/>
                </a>
              )}
              {p.caseStudy && (
                <Link href={`/projects/${p.slug}/case-study`} className="text-white/50 no-underline transition-colors hover:text-white">
                  View case study
                </Link>
              )}
              {p.links?.map((l) => (
                <a key={l.href} 
                  href={l.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-white/50 no-underline transition-colors hover:text-white">
                  {l.label} 
                  <FiArrowUpRight/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* META: label chips in four columns */}
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="inline-block rounded-sm bg-white/10 px-2 py-0.5 text-[11px] text-white/60">{label}</dt>
              <dd className="mt-2 text-sm text-white/85">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <hr className="mx-auto my-12 max-w-5xl border-white/15" />

     <Gallery items={p.gallery} />

      {p.details?.map((d) => (
        <section key={d.heading} className="mx-auto mt-16 max-w-5xl">
          <h2>{d.heading}</h2>
          {d.body && asList(d.body).map((t, i) => <p key={i}>{t}</p>)}
          {d.bullets && (
            <ul>
              {d.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

    </CaseStudyFrame>
  );
}
