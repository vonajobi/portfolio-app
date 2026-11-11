import type { Project } from "@/app/projects/types";

const lorenz: Project = {
  slug: "lorenz",
  title: "Lorenz Music Reactor",
  year: 2026,
  category: "dev",
  tags: ["Interaction", "Creative Code", "Frontend"],
  summary: "An interactive music visualizer inspired by the energy of Detty December. Built with GLSL shaders, the project transforms selected music tracks into dynamic, audio-reactive visuals, exploring the intersection of sound, motion, and code as a medium for cultural expression.",
  cover: { src: "/assets/sketchbook/lorenz_video.mp4", alt: "The Lorenz music reactor in motion", type: "video" },
  meta: {
    role: "Creative developer",
    tools: ["TypeScript, GLSL, CSS"],
  },
  gallery: [
    {
      src: "/assets/sketchbook/lorenz_video.mp4",
      autoPlay: true,
      alt: "The Lorenz music reactor in motion",
      caption: "Lorenz reacting to music playing",
      type: "video",
    },
  ],
  demo: { url: "https://jazz-synth.vercel.app/", label: "Launch demo" },
  links: [{ label: "GitHub", href: "https://github.com/vonajobi/jazz-synth" }],
  caseStudy: false
};

export default lorenz;
