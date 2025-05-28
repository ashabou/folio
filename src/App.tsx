import Hero from "./sections/Hero";
import Studium from "./sections/Study";
import Sidebar from "./components/sidebar/sidebar";
import Work from "./sections/work";
import SkillsAndProjects from "./sections/projects";
import About from "./components/about/about"; 


function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Hero />
      <Studium />
      <Work />
      <SkillsAndProjects />      
    </main>
    <footer className="">
      <About />
    </footer>
    

    </>
  );
}

export default App;