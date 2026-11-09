export type Media = {
  src: string;
  alt: string;
  caption?: string;           // one sentence that describes what you're looking at
  type?: "image" | "video";
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: "design" | "dev";
  tags: string[];
  summary: string | string[]; // what it is, then what you can do with it
  cover: Media;
  meta: { role: string; year?: string; tools?: string[] };
  gallery: Media[]; // the work on the project page
  details?: { heading: string; body?: string | string[]; bullets?: string[] }[]; // short notes
  demo?: { url: string; label?: string };
  links?: { label: string; href: string }[];
  caseStudy?: boolean;
};
