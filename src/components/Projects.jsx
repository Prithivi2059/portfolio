import { projectCard } from "@/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section className="w-full py-8 sm:py-12">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-18">
                <h1 className="h1">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                    {projectCard.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;