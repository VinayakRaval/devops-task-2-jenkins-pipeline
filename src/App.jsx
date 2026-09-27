import Navbar from "./components/Navbar";
import SideSocial from "./components/SideSocial";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Workflow from "./components/Workflow";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SoftSkills from "./components/SoftSkills";

function App() {
  return (
    <div className="app">

      <Navbar />

      <SideSocial />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Workflow />

        <Leadership />
        
        <SoftSkills />
        
        <Certifications />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;