import { FaCode, FaServer, FaTools, FaPython, FaJs, FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaGit } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiKubernetes, SiTypescript, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const SkillsAndProjects = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-900 text-white px-4 py-12 md:py-0">
      <div className="responsive-container-card">
        <motion.div 
          className="content-card-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1 
            className="skills-row"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Skills & Projects
          </motion.h1>

          {/* Single Column with 3 Rows */}
          <div className="skills-row">
            <motion.div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaCode className="mr-2" /> Languages & Frameworks
              </h2>
              <div className="flex justify-center">
                <div className="flex items-center flex-wrap gap-10 px-14 py-12 bg-gray-200 rounded-lg">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" style={{ width: "45px", height: "64px" }}/>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" style={{ width: "45px", height: "64px" }} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ width: "45px", height: "64px" }}/>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" style={{ width: "45px", height: "64px" }}/>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" style={{ width: "45px", height: "64px" }} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"style={{ width: "45px", height: "64px" }} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" style={{ width: "45px", height: "64px" }}/>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Database & Infrastructure */}
            <motion.div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaServer className="mr-2" /> Database & Infrastructure
              </h2>
              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <SiPostgresql className="text-2xl text-blue-600" style={{ width: "45px", height: "64px" }}/>
                  
                  <SiMongodb className="text-4xl text-green-500" style={{ width: "45px", height: "64px" }}/>
                  
                  <FaAws className="text-2xl text-yellow-500" style={{ width: "45px", height: "64px" }}/>
                  
                  <FaDocker className="text-2xl text-blue-400" style={{ width: "45px", height: "64px" }}/>
                  
                  <SiKubernetes className="text-2xl text-blue-400" style={{ width: "45px", height: "64px" }}/>
                  
                </div>
              </div>
            </motion.div>

            {/* Row 3: Development Tools */}
            <motion.div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaTools className="mr-2" /> Development Tools
              </h2>
              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-700 rounded-lg">

                  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" style={{ width: "45px", height: "64px" }}/> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style={{ width: "45px", height: "64px" }} />
                  <FaGithub className="text-2xl text-gray-400" style={{ width: "45px", height: "64px" }}/>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndProjects;