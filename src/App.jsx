import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import BackToTop from "./components/BackToTop"
import Education from "./components/Education"
import Certifications from "./components/Certifications"

function App() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App