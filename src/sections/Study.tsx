import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "./card";
import "../styles/study.css";

const education1 = [
  { s1: "Technical University of Munich",
    s2: "Application Subject: Business & Economics"},
];
const education2 = [
  { s1: "F+U Academy of languages Heidelberg"},
];
const education3 = [
  { s1: "top 15% of the year, Grade: 1.6 (Tunisia)"},
];

const Studium = () => {
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
                  Education
                </motion.h1>
                <Card v={education1} title={<><FaBook />  2021 - 2025: B.Sc. Computer Science</>} />
                <Card v={education2} title={<><FaBook />  2020 - 2021: German Language Course</>} />
                <Card v={education3} title={<><FaBook />  2016 - 2020: Elite High School in Tunisia with focus on Mathematics</>} />
              </motion.div>
            </div>
          </section>
      
  );
};

export default Studium;