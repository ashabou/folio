import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import react from "react";
import Card from "./card";
import "../styles/study.css";
import { Si2Fas } from "react-icons/si";

const work1 = [
  { s1: "Developed and maintained weekly performance reports using advanced Excel functions to track KPIsand business metrics.",
s2: "Managed website content updates, including promotional banners, through custom HTML implementations/affiliate network platforms (AWIN, CJ Affiliate).",
s3: "Optimized digital assets to drive affiliate marketing performance."
},
];
const work2 = [
  { s1: "Teaching and training a group of students on soft skills.",
    s2: "Leading them through a robot-building project in the theme of Olympics."
  },
];
const work3 = [
  { s1: "Leading a Team of 10+ members in the IGTa (International Global Talent) project."},
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
                    <Card v={work1} title={<><MdWork />  05/2024 - Present : Working Student - Affiliate Marketing @ADAMICUS</>} />
                    <Card v={work2} title={<><MdWork />  09/2024 - 06/2025 : Advisor, Project Manager @TUM</>} />
                    <Card v={work3} title={<><MdWork />  04/2025 - Present: Team Leader IGTa @AIESEC</>} />
                  </motion.div>
            </div>
          </section>
      
  );
};

export default Work;