import type { Project } from "@/app/projects/types";

const dir = "/assets/projects/intuitive_paper/";

const intuitivePaper: Project = {
  slug: "intuitive-paper",
  title: "Intuitive Paper",
  year: 2023,
  category: "dev",
  tags: ["Product", "UI/UX", "Full-stack"],
  summary: [
    "Intuitive Paper finds relevant research papers on arXiv and uses local LLMs to turn them into concise summaries and impact ratings. Scientists and entrepreneurs can look up a topic, trace how papers reference each other, and skip reading everything in full.",
  ],
  cover: { src: `${dir}main.png`, alt: "The finished Intuitive Paper site" },
  meta: {
    role: "Fullstack developer & Graphics",
    tools: ["Figma, PHP", "SQL", "Tailwind CSS", "arXiv API", "Google Analytics"],
  },
  gallery: [
    { src: `${dir}main.png`, alt: "The finished Intuitive Paper site" },
    { src: `${dir}loginPage.jpg`, alt: "Login Page" },
    { src: `${dir}registerPage.jpg`, alt: "Login Page" },
    { src: `${dir}generalInfoPage.jpg`, alt: "Acount information page"},
    { src: `${dir}managementPage.jpg`, alt: "Acount management page"},
    { src: `${dir}historyPage.jpg`, alt: "Browse history Page" },
    { src: `${dir}resultsPage.jpg`, alt: "Search results page"},
    { src: `${dir}detailsPage.jpg`, alt: "Paper details page"},
  ],
  links: [{ label: "GitHub", href: "https://github.com/TheTRUTHis42/IntuitivePaper" }],
  caseStudy: true
};

export default intuitivePaper;
