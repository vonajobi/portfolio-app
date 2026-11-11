import type { Project } from "@/app/projects/types";

const dir = "/assets/projects/scene/";

const childsPlay: Project = {
  slug: "child's-play",
  title: "Child's Play",
  year: 2024,
  category: "design",
  tags: ["3D", "Storytelling", "Environment"],
  summary: "Inside the Inner Mind is a 3D rendering project exploring the imaginative world of childhood through a collection of toys and objects found in a child's playroom. The project focused on creating a 3D environment and modeling objects that capture the playful nostalgia of childhood.",
  cover: { src: `${dir}scene1.webp`, alt: "3D scene", type: "image" },
  meta: {
    role: "3D Designer",
    tools: ["Fusion360, Photoshop, Adobe Dimension"],
  },
  gallery: [
    { src: `${dir}scene1.webp`, alt: "3D scene", type: "image" },
    {src: `${dir}scene2.webp`, alt: "3D scene", type: "image"},
    {src: `${dir}scene3.webp`, alt: "3D scene", type: "image"},
    {src: `${dir}planet.jpg`, alt: "Planet vector", type: "image"},
  ],
  caseStudy: false
};

export default childsPlay;
