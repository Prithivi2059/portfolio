import { Button } from "./ui/button"

const Home = () => {
    return (
        <section className="w-full px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
                <div className="bg-white rounded-3xl md:rounded-4xl flex items-center justify-center px-3 py-2 md:px-6 md:py-2">
                    <p className="text-sm md:text-base text-center">👋 Hi, I’m Prithivi Pemi Magar</p>
                </div>
                {/* Heading with inline videos */}
                <h1 className="text-2xl md:text-[50px] lg:text-8xl font-semibold text-center leading-tight">
                    Backend{" "}
                    <span className="inline-flex align-middle">
                        <video
                            width={70}
                            height={70}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-full mx-1"
                        >
                            <source src="./videos/node.mp4" type="video/mp4" />
                        </video>
                    </span>{" "}
                    Developer and{" "}
                    <span className="inline-flex align-middle">
                        <video
                            width={70}
                            height={70}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-full mx-1"
                        >
                            <source src="./videos/stool.mp4" type="video/mp4" />
                        </video>
                    </span>{" "}
                    Problem Solver.
                </h1>
                <p className="w-full md:w-[80%] text-[11px] md:text-[12px] lg:text-sm text-gray-custom text-center">As a backend developer, I build efficient systems that bring ideas to life — crafting RESTful APIs and optimizing databases for smooth, reliable performance.</p>
                <div className="btn flex gap-4">
                    <Button className="rounded-full cursor-pointer">Lets Connect 💬</Button>
                    <Button className="rounded-full border cursor-pointer border-gray-300 bg-transparent text-black">Download CV 📄</Button>
                </div>
            </div>
        </section>
    )
}

export default Home