import { Button } from "./ui/button";
const ProjectCard = ({ project }) => {
    const { name, img, description, stack, link } = project;
    return (
        <div className="bg-[#D9D9D9]/30  px-4 py-4 rounded-2xl flex flex-col gap-2 md:gap-3 ">
            <h2 className="font-semibold text-black">{name}</h2>
            <img className="w-full h-full object-cover rounded-sm" src={img} alt={name} />
            <p className="text-gray-custom text-[12px] md:text-[12px]">{description}</p>
            <ul className="flex gap-2 flex-wrap">
                {stack.map((item, index) => (
                    <li className="px-2 py-1 text-[10px] bg-white rounded-sm" key={index}>{item}</li>
                ))}
            </ul>
            <Button asChild className="bg-white text-black hover:bg-white/70">
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </Button>
        </div>
    )
}

export default ProjectCard;