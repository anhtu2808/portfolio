import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Review from "./components/Review"
import Header from "./components/Header"
import { ReactLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { initGA } from "./analytics"
import { useEffect } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-300 selection:bg-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>


      <div className="container mx-auto px-8">
        <ReactLenis root>
          <Header />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Project />
          <Review />
          <Contact />
        </ReactLenis>
      </div>
    </div>


  )
}

export default App