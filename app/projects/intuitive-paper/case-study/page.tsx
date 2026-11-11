import { notFound } from "next/navigation";
import { CaseStudyFrame } from "@/app/components/layout/caseStudyFrame";
import { getProject } from "@/app/projects/data";

export const metadata = {
  title: "Intuitive Paper: Case Study",
  description: "TODO",
};

export default function CaseStudy() {
  const p = getProject("intuitive-paper");
  if (!p) notFound();

  const meta: [string, string][] = [
    ["Year", String(p.year)],
    ["Role", p.meta.role],
  ];
  if (p.meta.tools?.length) meta.push(["Skills & Tools", p.meta.tools.join(", ")]);

  const dir = "/assets/projects/intuitive_paper/";
  const sectionStyle = "mx-auto mt-16 max-w-2xl scroll-mt-24 md:mt-24";
  const img = "h-full w-full rounded-md";

  return (
    <CaseStudyFrame title={p.title} backHref={`/projects/${p.slug}`} nav={true}>
      <header>
        {/* stacks on phones, two columns from md up */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h1>{p.title}</h1>
            <p className="text-xs">Revolutionizing research efficiency for scientists & entrepreneurs</p>
            <br />
            <p>
              As part of a collaborative class project, I helped develop a web-based research discovery platform designed to help scientists and entrepreneurs find relevant academic publications.
              Using the arXiv API, we built a searchable database of research papers, allowing users to explore publications through a centralized interface rather than manually navigating multiple sources.
            </p>
          </div>
          <img
            src={`${dir}main.png`}
            alt="The finished Intuitive Paper site"
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className={img}
          />
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="inline-block rounded-sm bg-white/10 px-2 py-0.5 text-[11px] text-white/60">{label}</dt>
              <dd className="mt-2 text-sm text-white/85">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <hr className="my-12 border-white/15 md:my-24" />

      <section id="problem" data-title="[01] Problem" className={sectionStyle}>
        <h2>The Problem</h2>
        <p>
          The growing volume of scientific publications makes it increasingly difficult to find relevant research.
          Scientists and entrepreneurs often spend considerable time searching through papers to identify useful information and emerging ideas.
        </p>
        <br/>
        <p>
          The goal was to simplify this process by creating a centralized platform where users could search, filter, and explore academic publications more efficiently.
        </p>
      </section>

      <section id="process" data-title="[02] Process" className={sectionStyle}>
        <h2>Process</h2>
        <p>
          Working as a team, we identified research discovery as an opportunity to improve how people access scientific publications.
          We outlined potential features, including AI-generated summaries and visualizations of research relationships, to inform our initial product direction.
        </p>
        <br/>
        <p>
          My contributions focused on the database, PHP backend, and front-end development.
          I worked on connecting the application to its underlying data and supporting the functionality needed to retrieve and display research papers.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-2">
          <img src={`${dir}site_map.png`} alt="Process site map" width={1302} height={597} loading="lazy" decoding="async" className={img} />
          <img src={`${dir}site_map_2.png`} alt="Process site map two" width={5197} height={2314} loading="lazy" decoding="async" className={img} />
          <img src={`${dir}site_map_3.png`} alt="Process site map three" width={5197} height={1943} loading="lazy" decoding="async" className={img} />
        </div>
      </section>

      <section id="how-its-built" data-title="[03] Tech Stack" className={sectionStyle}>
        <h2>How It's Built</h2>
        <p>
          The application was built using <span className="font-bold text-[#6699cc]">PHP</span> for server-side scripting, <span className="font-bold text-[#6699cc]">SQL</span> database querying, and <span className="font-bold text-[#6699cc]">Tailwind CSS</span> for rapid, responsive design.
          Google Analytics APIs were integrated to track user engagement. The arXiv API was used to fetch research papers and extract relevant data for analysis.
        </p>
        <img src={`${dir}database_flow.png`} alt="Database flow" width={1468} height={1384} loading="lazy" decoding="async" className={`${img} mt-6`} />
      </section>

      <section id="outcome" data-title="[04] Outcome" className={sectionStyle}>
        <h2>Project Outcome</h2>
        <p>
          We developed a functional research discovery website connected to the arXiv API and a SQL database. Users could search and filter academic publications by title, author, and keywords, making it easier to locate relevant research.
        </p>
        <br/>
        <p>
          While additional concepts such as AI-powered summaries and citation relationship visualizations were explored during the project, the completed deliverable focused on establishing the core search and discovery experience.
        </p>
        <video
          src={`${dir}walkthrough.mp4`}
          controls
          playsInline
          preload="metadata"
          className="mt-6 aspect-video w-full rounded-md"
        />
      </section>

      <section id="learnings" data-title="[05] Learnings" className={sectionStyle}>
        <h2>My Learnings</h2>
        <p>
          This project introduced me to the process of developing a full-stack web application and connecting its different layers. I gained experience working with PHP, SQL databases, external APIs, and front-end development while learning how data moves between the backend and user interface.
        </p>
      </section>
    </CaseStudyFrame>
  );
}
