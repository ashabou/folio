import React from "react";
import "./sidebar.css";
import Logo from "../../../assets/logo.svg";

const Sidebar: React.FC = () => {
    return (
        <header className="top-bar">
    <div className="logo">
      <img src={Logo} alt="Aziz Logo" />
    </div>
    <nav className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
    )  

}

export default Sidebar;