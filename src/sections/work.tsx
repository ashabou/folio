import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import react from "react";
import Card from "./card";
import "../styles/study.css";

const work1 = [
  { s1: "Technical University of Munich",
    s2: "Application Subject: Business & Economics"},
];
const work2 = [
  { s1: "F+U Academy of languages Heidelberg"},
];
const work3 = [
  { s1: "top 15% of the year, Grade: 1.6 (Tunisia)"},
];

const Work = () => {
  return (
      
      <section className="min-h-90vh flex items-center bg-gray-900 text-white px-4 py-12 md:py-0">
            <div className="responsive-container-card">
              <motion.div 
                className="content-card-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-8 text-left text-blue-400"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Work Experience
                </motion.h1>
                    <Card v={work1} title={<><FaBook />  05/2024 - Present : Working Student - Affiliate Marketing @ADAMICUS</>} />
                    <Card v={work2} title={<><FaBook />  09/2024 - 06/2025 : Advisor, Project Manager @TUM</>} />
                    <Card v={work3} title={<><FaBook />  04/2025 - Present: Team Leader IGTa @AIESEC</>} />
                  </motion.div>
            </div>
          </section>
      
  );
};

export default Work;