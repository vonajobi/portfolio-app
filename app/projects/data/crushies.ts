import type { Project } from "@/app/projects/types";

const dir = "/assets/projects/blind_box/";

const crushies: Project = {
  slug: "crushies",
  title: "Crushies",
  year: 2023,
  category: "design",
  tags: ["Product", "3D Modeling"],
  summary: [
    "Crushies is a blind-box collectible series exploring the complexities of love, heartbreak, and the absence of affection. Through character-driven designs, the collection gives playful form to the many emotions and experiences associated with love.",
  ],
  cover: { src: `${dir}1.webp`, alt: "Crushies: A Blindbox Series" },
  meta: {
    role: "3D Designer & Fabricator",
    tools: ["Fusion360","Blender","OrcaSlicer"],
  },
  gallery: [
    { src: `${dir}title.webp`, alt: "Crushies: A Blindbox Series" },
    { src: `${dir}IMG_7344.webp`, alt: "Crushies" },
    { src: `${dir}IMG_7409.webp`, alt: "Crushies" },
    { src: `${dir}final_design.svg`, alt: "Final designs"},
    { src: `${dir}/drawings/PackagingResized-01.webp`, alt: "Final designs"},
    { src: `${dir}/drawings/crushie_base.webp`, alt: "Crushie turnaround"},
    { src: `${dir}crushie_2.webp`, alt: "Crushie Original"},
    { src: `${dir}crushie_4.webp`, alt: "Crushie Original with other toys"},
    { src: `${dir}/drawings/down_bad_base.webp`, alt: "Downbad turnaround"},
    { src: `${dir}devil_3.webp`, alt: "Downbad"},
    { src: `${dir}down_bad_render.webp`, alt: "Downbad render with gray background"},
    { src: `${dir}devil_1.webp`, alt: "Downbad zoomed in"},
    { src: `${dir}devil_5.webp`, alt: "Victoria sanding toy"},
    { src: `${dir}/drawings/gas_light_base.webp`, alt: "Gaslight turnaround"},
    { src: `${dir}gas_light_3.webp`, alt: "Gaslight"},
    { src: `${dir}animation.mp4`, alt: "Gaslight fire animation", type: "video", autoPlay: true}, 
    { src: `${dir}gas_light_4.webp`, alt: "Gaslight zoomed in"},
    { src: `${dir}/drawings/head_clouds_base.webp`, alt: "Head-in-the-clouds turnaround"},
    { src: `${dir}clouds_4.webp`, alt: "Head in the clouds toy"},
    { src: `${dir}clouds_1.webp`, alt: "Head in the clouds zoomed in"},
    { src: `${dir}/drawings/love_sick_base.webp`, alt: "Love sick turnaround"},
    { src: `${dir}love_sick_5.webp`, alt: "Love Sick"},
    { src: `${dir}/drawings/ghosted_base.webp`, alt: "Ghosted turnaround"},
    { src: `${dir}ghosted_1.webp`, alt: "Ghosted toy"},
    { src: `${dir}design_explorations.webp`, alt: "Design explorations"},
    { src: `${dir}IMG_9911.webp`, alt: "Prototypes"},
    { src: `${dir}team.svg`, alt: "Team List"}
    
  ],
  caseStudy: true
};

export default crushies;
