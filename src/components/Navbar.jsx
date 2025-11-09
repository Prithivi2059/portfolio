import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <header>
            <div className="icon"><h1>PPM</h1></div>
            <nav className="navs">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="btn">
                <Button>Contact <span><img src="./svgs/upside.svg" alt="" /></span></Button>
            </div>
        </header>
    )
}

export default Navbar;