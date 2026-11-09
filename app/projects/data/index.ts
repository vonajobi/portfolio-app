import type { Project } from "@/app/projects/types";
import intuitivePaper from "./intuitive-paper";
import lorenz from "./lorenz";

export const projects: Project[] = [intuitivePaper, lorenz];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
