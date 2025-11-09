import ButtonIcon from "./ButtonIcon";

const About = () => {
    return (
        <section className="w-full px-4 py-8 sm:py-12">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-18">
                <h1 className="h1">About Me</h1>
                <div className="relative flex justify-center items-center">
                    <p className="w-[64%] text-[10px]  md:text-[14px] lg:text-sm text-center">I’m a backend developer who enjoys turning ideas into reliable systems. I love building fast, secure, and scalable APIs that help products run smoothly behind the scenes. I’m passionate about integrating AI into backend systems to create smarter, more efficient, and adaptive solutions</p>
                    <ButtonIcon icon="/images/figma.png" name="Figma" bg="#ffc795" pos={{ top: "25%", left: "82%" }} rotate={10} />
                    <ButtonIcon icon="/images/vscode.png" name="VSCode" bg="#79CCFF" pos={{ top: "-20%", left: "79%" }} rotate={-10} />
                    <ButtonIcon icon="/images/nodejs.png" name="Node.js" bg="#209651" pos={{ top: "-20%", left: "6%" }} rotate={10} />
                    <ButtonIcon icon="/images/express.png" name="Express" bg="#944444" pos={{ top: "30%", left: "4%" }} rotate={5} />
                    <ButtonIcon icon="/images/github.png" name="GitHub" bg="#79CCFF" pos={{ top: "72%", left: "79%" }} rotate={-15} />
                    <ButtonIcon icon="/images/mongodb.png" name="MongoDB" bg="#25E97D" pos={{ top: "72%", left: "4%" }} rotate={-10} />
                </div>
            </div>

        </section>
    )
}

export default About;