import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 py-4 sm:px-[4em] md:py-4 md:px-[8em]">
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
                <Button asChild className="rounded-full border cursor-pointer border-gray-300 bg-transparent text-black hover:bg-gray-300/30">
                    <a href="#contact"> Contact <span><img className="text-white inline-block ml-2" src="./svgs/upside.svg" alt="Upside SVG" /></span></a>
                </Button>
            </div>

            {/* hamburger for mobile using Sheet trigger */}
            <div className="hamburger block md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-2">
                            <img src="./svgs/hamburger.svg" alt="Hamburger SVG" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-80 max-w-full p-6">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription className="sr-only">Navigation</SheetDescription>
                        </SheetHeader>

                        <nav>
                            <ul className="flex flex-col gap-4 text-lg mt-4">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>

                        <div className="mt-6">
                            <Button asChild className="rounded-full border cursor-pointer border-gray-300 bg-transparent text-black hover:bg-gray-300/30 w-full">
                                <a href="#contact" className="w-full inline-flex items-center justify-center py-2">Contact <img className="ml-2" src="./svgs/upside.svg" alt="Upside SVG" /></a>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Navbar;