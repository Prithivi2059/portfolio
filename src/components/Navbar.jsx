import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 py-4  sm:px-[4em] md:py-4 md:px-[8em]">
            <div className="icon"><h1 className="font-semibold">PPM</h1></div>

            <nav className="navs hidden md:block ml-30">
                <ul className="flex items-center justify-center gap-4">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="btn hidden md:block">
                <Button className="rounded-full border cursor-pointer border-gray-300 bg-transparent text-black hover:bg-gray-300/30">
                    Contact <span><img className="text-white" src="./svgs/upside.svg" alt="Upside SVG" /></span>
                </Button>
            </div>
            <div className="hamburger block md:hidden">
                <img src="./svgs/hamburger.svg" alt="Hamburger SVG" />
            </div>
        </header>

    )
}

export default Navbar;