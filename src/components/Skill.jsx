import { skillCard } from "@/constants";
import SkillCard from "./SkillCard";

const Skill = () => {
    return (
        <section id="skills" className="w-full px-4 py-8 sm:py-12">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-18">
                <h1 className="h1">Skill</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-16 lg:gap-20">
                    {
                        skillCard.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill;