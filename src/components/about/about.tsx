import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaGitlab
} from "react-icons/fa";
import "./about.css";

const About: React.FC = () => {
  return (
    <div className="bottom-bar">
      <div className="name">Aziz Shabou</div>

      <div className="social-icons">
        <a href="https://linkedin.com/in/aziz-shabou/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:shabou.aziz.contact@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://gitlab.com/ashabou" target="_blank" rel="noopener noreferrer">
          <FaGitlab />
        </a>
      </div>

      <div className="copyright">
        ©2023 - 2025 Aziz Shabou
      </div>
    </div>
  );
};

export default About;
