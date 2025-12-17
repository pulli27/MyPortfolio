import Name from "../components/Name";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Name />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
