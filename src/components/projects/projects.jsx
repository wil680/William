import "./Projects.css";
import { FaGithub, FaCode } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      name: "Coordinate",
      description:
        "A full-stack scheduling web app featuring secure Google login, a responsive calendar interface, and PostgreSQL-backed attendance tracking.",
      technology: "Node.js, React.js, Javascript",
      github: "https://github.com/wil680/coordinate",
    },
    {
      name: "BudgetQuest",
      description:
        "an offline financial literacy mobile game using Expo SQLite and JavaScript, with persistent game state, dynamic UI components, and automated reports.",
      technology: "React Native, Typescript, Expo, SQLite",
      github: "https://github.com/wil680/budget-quest",
    },
    {
      name: "Bedside Physical Assistant",
      description:
        "an Arduino UNO R4 assistant using C++ that integrates motion, heart-rate, and audio sensors to support patient engagement and delirium prevention.",
      technology: "C++, Arduino",
      github: "https://github.com/physical-assistant/physical-assistant",
    },
  ];

  return (
    <div id="projects">
      <div className="subsection">
        <h2 className="subsection-title">Projects</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-content">
                <div className="project-heading">
                  <FiLayers size={24}></FiLayers>
                  <a href={project.github} target="_blank">
                    <FaGithub size={20} />
                  </a>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">{project.technology}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
