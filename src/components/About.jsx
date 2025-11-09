import ButtonIcon from "./ButtonIcon";
import { buttonIcons } from "@/constants";

const About = () => {
    return (
        <section className="w-full py-8 sm:py-12">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-18">
                <h1 className="h1">About Me</h1>
                <div className="relative z-10 flex justify-center items-center">
                    <p className="relative z-20 w-full md:w-[64%] text-[10px]  md:text-[14px] lg:text-sm text-center">I’m a backend developer who enjoys turning ideas into reliable systems. I love building fast, secure, and scalable APIs that help products run smoothly behind the scenes. I’m passionate about integrating AI into backend systems to create smarter, more efficient, and adaptive solutions</p>
                    {buttonIcons.map((icon, index) => (
                        <ButtonIcon key={index} {...icon} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default About;