import Link from "next/link";
import Interactions from "./interactions";

type Project = {
  _id: number;
  title: string;
  description: string;
  link: string;
  media: string;
  type: string;
  category: string;
};

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <Interactions>
      <Link
        href={project.link}
        className="hover:shadow-2xl hover:shadow-zinc-500 transition-shadow px-2 py-2 rounded-lg max-w-3xl"
      >
        <div className="grid gap-2">
          {project.type === "video" ? (
            <video
              src={project.media}
              className="md:w-[500px] md:h-[280px] rounded-lg object-cover"
              autoPlay loop playsInline muted
              preload="metadata"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="md:w-[500px] md:h-[280px] rounded-lg"
            />
          )}
          <h2 className="text-md uppercase">{project.title}</h2>
          <p className="text-sm pb-2">{project.description}</p>
        </div>
      </Link>
    </Interactions>
  );
}
