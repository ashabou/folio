import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <h1 className="text-4xl font-bold">Aziz Shabou</h1>
      <p className="text-xl mt-4">Computer Science Student & Developer</p>
      <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">
        View Projects
      </button>
    </motion.section>
  );
};