import { projectCard } from "@/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section className="w-full px-4 py-8 sm:py-12 bg-red-200">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-18">
                <h1 className="h1">Projects</h1>
                {projectCard.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;