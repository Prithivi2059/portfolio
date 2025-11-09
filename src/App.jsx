import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 py-4 sm:px-[4em] md:py-4 md:px-[8em]">
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App;