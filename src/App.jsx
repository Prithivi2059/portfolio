import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 py-4 sm:px-[4em] md:py-4 md:px-[8em]">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App;