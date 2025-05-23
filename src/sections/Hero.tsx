import { motion } from "framer-motion";
import '../styles/hero.css';
import React from "react";
import Logo from "../../assets/logo.svg"; // Adjust the path as necessary

const Hero: React.FC = () => {
  return (
    <section className="min-h-90vh flex items-center bg-gray-900 text-white px-4 py-12 md:py-0">
      <div className="responsive-container">
        <motion.div 
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image - Left Side */}
          <motion.div
            className="image-container"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={Logo}
              alt="Aziz Shabou"
              className="profile-image"
            />
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            className="text-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Aziz Shabou
            </motion.h1>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science Student @ TUM
            </motion.h2>

            <motion.h3
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Working Student Affiliate Marketing at ADAMICUS
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="leading-relaxed"
            >
              Welcome to my digital realm! The place where I share my journey, projects, 
              and passions. With science, art and excellence as my driving forces. I'm diving 
              deep into the world of creativity and innovation. With a commitment to make a social 
              positive change using our history's greatest tools -Informations & Algorithms-, 
              I'm on the chase for the right experiences.. 
              <br/><br/>
                Willing to take part on this journey?
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;