import { FaCode, FaServer, FaTools, FaPython, FaJs, FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiKubernetes, SiTypescript, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";

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
            className="text-4xl md:text-5xl font-bold mb-8 text-left text-blue-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Skills & Projects
          </motion.h1>

          {/* Single Column with 3 Rows */}
          <div className="flex flex-col gap-8">
            {/* Row 1: Languages & Frameworks */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaCode className="mr-2" /> Languages & Frameworks
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaPython className="text-2xl text-blue-400" />
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaJs className="text-2xl text-yellow-400" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaJava className="text-2xl text-red-400" />
                  <span>Java</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <SiTypescript className="text-2xl text-blue-500" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaReact className="text-2xl text-blue-300" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <SiDjango className="text-2xl text-green-500" />
                  <span>Django</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaNodeJs className="text-2xl text-green-600" />
                  <span>Node.js</span>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Database & Infrastructure */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaServer className="mr-2" /> Database & Infrastructure
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <SiPostgresql className="text-2xl text-blue-600" />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <SiMongodb className="text-2xl text-green-500" />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaAws className="text-2xl text-yellow-500" />
                  <span>AWS</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaDocker className="text-2xl text-blue-400" />
                  <span>Docker</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <SiKubernetes className="text-2xl text-blue-400" />
                  <span>Kubernetes</span>
                </div>
              </div>
            </motion.div>

            {/* Row 3: Development Tools */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaTools className="mr-2" /> Development Tools
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaGitAlt className="text-2xl text-orange-600" />
                  <span>Git</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaTools className="text-2xl text-gray-400" />
                  <span>Debugging</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaTools className="text-2xl text-gray-400" />
                  <span>Testing</span>
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