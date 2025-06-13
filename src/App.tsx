import Hero from "./sections/Hero";
import Studium from "./sections/Study";
import Sidebar from "./components/sidebar/sidebar";
import Work from "./sections/work";
import SkillsAndProjects from "./sections/projects";
import About from "./components/about/about"; 
import { CurriculumSection } from './sections/curriculum';



function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Hero />
      <Studium />
      <Work />
      <CurriculumSection /> 
      <SkillsAndProjects />     
    </main>
    <footer className="">
      <About />
    </footer>
    

    </>
  );
}

export default App;