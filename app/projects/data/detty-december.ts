import type { Project } from "@/app/projects/types";

const dir = "/assets/projects/detty_december/";

const dettyDecember: Project = {
  slug: "detty-december",
  title: "Detty December",
  year: 2026,
  category: "design",
  tags: ["Product", "Apparel","Footwear"],
  summary: [
    "This project goal was to deliver a cohesive capsule for my consumer Amara Okoye centered around the overarching theme of Black History Month and a secondary theme Night Out. The capsule must include a male and female performance shoe, unisex lifestyle shoe, and merch.",
  ],
  cover: { src: `${dir}Artboard 1.webp`, alt: "Detty December Intro" },
  meta: {
    role: "CMD Designer",
    tools: ["Adobe Illustrator"],
  },
  gallery: [
    { src: `${dir}Artboard 1.webp`, alt: "Detty December Intro" },
    { src: `${dir}Artboard 5.webp`, alt: "Consumer Intro" },
    { src: `${dir}Artboard 7.webp`, alt: "Colour story 1" },
    { src: "/assets/sketchbook/lorenz_video.mp4", alt: "Lorenz music reactor" },
    { src: `${dir}Artboard 9.webp`, alt: "Colour story 2" },
    { src: `${dir}portfolio-11.webp`, alt: "Male performance ideation" },
    { src: `${dir}portfolio-12.webp`, alt: "Male performance final" },
    { src: `${dir}Artboard 13.webp`, alt: "Male performance final render" },
    { src: `${dir}portfolio-14.webp`, alt: "Male performance tech pack" },
    { src: `${dir}portfolio-16.webp`, alt: "Female performance ideation" },
    { src: `${dir}portfolio-17.webp`, alt: "Female performance final" },
    { src: `${dir}Artboard 18.webp`, alt: "Male performance final render" },
    { src: `${dir}portfolio-19.webp`, alt: "Female performance tech pack" },
    { src: `${dir}portfolio-21.webp`, alt: "Lifestyle ideation" },
    { src: `${dir}portfolio-22.webp`, alt: "Lifestyle final" },
    { src: `${dir}Artboard 23.webp`, alt: "Lifestyle final render" },
    { src: `${dir}portfolio-24.webp`, alt: "Lifestyle tech pack" },
    { src: `${dir}portfolio-26.webp`, alt: "Lifestyle merch ideation" },
    { src: `${dir}portfolio-27.webp`, alt: "Lifestyle final" },
    { src: `${dir}Artboard 28.webp`, alt: "Lifestyle final render" },
    { src: `${dir}portfolio-29.webp`, alt: "Lifestyle final tech pack" },
   
    
  ],
  caseStudy: true
};

export default dettyDecember;

