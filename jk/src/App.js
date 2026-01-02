import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import './App.css'
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = ["Home", "Skills", "Projects", "Contact"];

  const skillsData = ["HTML", "CSS", "JavaScript", "React"];

  const projectsData = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React"
    },
    {
      title: "Currency Converter",
      description: "Converts currencies using live rates"
    }
  ];

  return (
    <>
      <Navbar
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {activeSection === "Home" && (
        <Home
          name="Jai"
          title="Frontend Developer"
          intro="I build clean and interactive web applications using React."
        />
      )}

      {activeSection === "Skills" && <Skills skills={skillsData} />}

      {activeSection === "Projects" && (
        <Projects projects={projectsData} />
      )}

      {activeSection === "Contact" && <Contact />}
    </>
  );
}

export default App;