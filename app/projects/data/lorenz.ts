import type { Project } from "@/app/projects/types";

const lorenz: Project = {
  slug: "lorenz",
  title: "Lorenz Music Reactor",
  year: 2025, // TODO: confirm
  category: "dev",
  tags: ["Interaction", "Creative Code", "Frontend"],
  summary: "TODO: Two sentences. What it is, then what someone can do with it.",
  cover: { src: "/assets/sketchbook/lorenz_video.mp4", alt: "The Lorenz music reactor in motion", type: "video" },
  meta: {
    role: "Creative developer",
    tools: ["TODO: libraries and tools"],
  },
  gallery: [
    {
      src: "/assets/sketchbook/lorenz_video.mp4",
      alt: "The Lorenz music reactor in motion",
      caption: "TODO: describe what's happening in the clip.",
      type: "video",
    },
  ],
  demo: { url: "https://jazz-synth.vercel.app/", label: "Launch demo" }, // TODO: confirm this is the Lorenz demo
  // links: [{ label: "GitHub", href: "https://github.com/vonajobi/..." }],
  details: [
    { heading: "How it works", body: "TODO: 3–5 sentences. The Lorenz equations, and how the music drives them." },
    { heading: "Controls", bullets: ["TODO: what each control does"] },
  ],
};

export default lorenz;
