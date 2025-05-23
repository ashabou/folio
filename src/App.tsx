import Hero from "./sections/Hero";
import Studium from "./sections/Study";
import Sidebar from "./components/sidebar/sidebar";
import Work from "./sections/work";
import SkillsAndProjects from "./sections/projects"; 


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
    </>
  );
}

export default App;