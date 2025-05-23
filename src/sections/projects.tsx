import { FaCode, FaServer, FaTools, FaPython, FaJs, FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiKubernetes, SiTypescript, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";

const SkillsAndProjects = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-900 text-white px-4 py-12 md:py-0">
      <div className="flex flex-row items-start justify-between w-full gap-4">
        <motion.div 
          className="content-card-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <h1 className="text-4xl font-bold mb-12 text-blue-400 text-left">
            Skills & Projects
          </h1>

          {/* Three Clean Columns */}
          <div className="flex flex-row items-start justify-between w-full gap-4">
            {/* Column 1: Languages & Frameworks */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaCode className="mr-2" /> Languages & Frameworks
              </h2>
              <div className="flex flex-wrap gap-4">
                <FaPython className="text-4xl" title="Python"/>
                <FaJs className="text-4xl" title="JavaScript"/>
                <FaJava className="text-4xl" title="Java"/>
                <SiTypescript className="text-4xl" title="TypeScript"/>
                <FaReact className="text-4xl" title="React"/>
                <SiDjango className="text-4xl" title="Django"/>
                <FaNodeJs className="text-4xl" title="Node.js"/>
              </div>
            </div>

            {/* Column 2: Database & Infrastructure */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaServer className="mr-2" /> Database & Infrastructure
              </h2>
              <div className="flex flex-wrap gap-4">
                <SiPostgresql className="text-4xl" title="PostgreSQL"/>
                <SiMongodb className="text-4xl" title="MongoDB"/>
                <FaAws className="text-4xl" title="AWS"/>
                <FaDocker className="text-4xl" title="Docker"/>
                <SiKubernetes className="text-4xl" title="Kubernetes"/>
              </div>
            </div>

            {/* Column 3: Development Tools */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                <FaTools className="mr-2" /> Development Tools
              </h2>
              <div className="flex flex-wrap gap-4">
                <FaGitAlt className="text-4xl" title="Git"/>
                <FaTools className="text-4xl" title="Debugging Tools"/>
                <FaTools className="text-4xl" title="Testing"/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndProjects;