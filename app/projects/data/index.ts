import type { Project } from "@/app/projects/types";
import childsPlay from "./child's-play";
import intuitivePaper from "./intuitive-paper";
import crushies from "./crushies"
import lorenz from "./lorenz";
import dettyDecember from "./detty-december";
import hBlocks from "./h_blocks";

export const projects: Project[] = [
  intuitivePaper, 
  lorenz, 
  childsPlay,
  crushies,
  hBlocks,
  dettyDecember

];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
