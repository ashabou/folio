import { Hero } from "./sections/Hero";
import { Studium } from "./sections/Study";
import { Skills } from "./sections/Skills";
import Sidebar from "./components/sidebar/sidebar";
//import { Projects } from "./sections/Projects";


function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Hero />
      <Studium />
      <Skills />
      {/* <Projects /> */}
    </main>
    </>
  );
}

export default App;