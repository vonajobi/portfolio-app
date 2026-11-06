import Link from "next/link";
import Interactions from "./interactions";
import {JetBrains_Mono, Syne, Rubik_Mono_One, Unbounded, Trirong } from "next/font/google";

const display = Trirong({ subsets: ["latin"], weight: "400" , style: "italic"})
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });


export type Project = {
  _id: number;
  title: string;
  role: string;
  tags: string[];
  description: string;
  link: string;
  media: string;
  type: string;
  category: string;
};

// your homepage palette
const accents = ["#f2777a", "#ffcc66", "#99cc99", "#66cccc", "#6699cc", "#cc99cc"];

export default function ProjectCard({ project }: { project: Project }) {
  const accent = accents[project._id % accents.length];

  return (
    <Interactions color={accent}>
      <Link
        href={project.link}
        className="hover:shadow-2xl hover:shadow-zinc-500 transition-shadow px-2 py-2 rounded-lg max-w-3xl"
      >
        <div className="grid gap-2">
          {project.type === "video" ? (
            <video
              src={project.media}
              className="md:w-125 md:h-70 rounded-lg object-cover"
              autoPlay
              loop
              playsInline
              muted
              preload="metadata"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="md:w-125 md:h-70 rounded-lg object-cover"
            />
          )}

          <div className={`${mono.className} text-[11px] w-fit px-2 uppercase tracking-widest text-white bg-black/40 rounded-sm`} style={{color: accent }}>
            {project.tags.join(" / ")}
          </div>

          <h2 className={` text-xl tracking-wide text-white/80`}>
             [{project.title}]
          </h2>


          <p className="text-sm pb-2">{project.description}</p>
        </div>
      </Link>
    </Interactions>
  );
}
