import Navbar from "./layouts/Navbar"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Proflink from "./sections/proflink";
import Achivements from "./sections/Achivements";
import Education from "./sections/Education";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Proflink />
        <Achivements />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
