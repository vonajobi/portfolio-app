import type { Project } from "@/app/projects/types";

const dir = "/assets/projects/paladone/";

const hBlocks: Project = {
  slug: "h-blocks",
  title: "H-Blocks",
  year: 2024,
  category: "dev",
  tags: ["Product", "Industrial", "Research"],
  summary: [
    "H-Block Party is a modular, Bluetooth-enabled lighting and construction game developed for Paladone. Combining customizable illuminated blocks with connected app experiences, the concept encourages creative expression, social competition, and interactive play. Designed with sustainability and scaling in mind, the system bridges physical and virtual entertainment through a reconfigurable lighting experience.",
  ],
  cover: { src: "", alt:""} ,
  meta: {
    role: "3D Designer",
    tools: ["Fusion360","Blender","Figma"],
  },
  gallery: [
    { src: `${dir}final_design_2.webp`, alt: "Final Designs" },
    { src: `${dir}final_design_3.svg`, alt: "Final designs eyes" },
    { src: `${dir}group_1.webp`, alt: "Final designs renders" },
    { src: `${dir}scene_1v2.webp`, alt: "Final designs renders" },
    { src: `${dir}scene_2_k.webp`, alt: "Render of K block" },
    { src: `${dir}scene_2_n.webp`, alt: "Render of N block" },
    { src: `${dir}h_block_closeup.webp`, alt: "Render of H block" },
    { src: `${dir}scene_2_t.webp`, alt: "Render of T block" },
    { src: `${dir}toy_bloom.webp`, alt: "Render of all blocks" },
    { src: `${dir}Silver.webp`, alt: "H-blocks graphic" },
    { src: `${dir}Silver_3.webp`, alt: "H-blocks graphic" },
    { src: `${dir}Silver_2.webp`, alt: "My creations" },
    { src: `${dir}mockup.webp`, alt: "Packaging mockup" },
    { src: `${dir}Graphite.webp`, alt: "Instagram mockup" },
    { src: `${dir}palette.svg`, alt: "Instagram mockup" },
    
    
  ],
  caseStudy: true
};

export default hBlocks;
