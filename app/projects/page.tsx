import projects from "../../public/data/projects.json";
import ProjectsCard from "./projectsCard";
export const metadata = { title: 'Victoria Onajobi | Projects',  description: "Design and development projects by Victoria Onajobi."}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const list = category ? projects.filter((p) => p.category === category) : projects;

  return (
    <div className="mt-0 md:mt-12">
      <div className="absolute 
                      inset-0 
                      bg-[url('/assets/background_black.svg')] 
                      bg-no-repeat 
                      bg-cover 
                      opacity-30" />
      <h1 className="sr-only">Projects</h1>
      <div className="flex 
                      flex-wrap 
                      mb-16 
                      mt-7 
                      md:mx-4 
                      justify-center 
                      items-center 
                      text-left 
                      gap-2 
                      sm:gap-5 
                      text-neutral-400">
        {list.map((project) => (
          <ProjectsCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
