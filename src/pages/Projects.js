import { useState, useEffect } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import projects from "../content/projects";
import "./Projects.css";

export default function Projects() {
  const [frontFilter, setFrontFilter] = useState(true);

  useEffect(() => {
    filterContent();
  }, [frontFilter]);

  const filterContent = () => {
    let content = projects.filter((project) =>
      project.tags.includes("front-end")
    );

    if (!frontFilter) {
      content = projects.filter((project) => project.tags.includes("back-end"));
    }
    return content;
  };

  let siteContent = filterContent();

  return (
    <div className="projects">
      <Header />
      <div className="projects-inner">
        <h1>Projetos</h1>
        <div className="links">
          <button onClick={() => setFrontFilter(true)}>front-end</button>
          <button onClick={() => setFrontFilter(false)}>
            back-end && fullstack
          </button>
        </div>
        <div className="project-cards">
          {siteContent.length === 0 && <p>Ops! Nenhum projeto para exibir.</p>}
          {siteContent.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
        <button className="home-button">
          <Link to="/">← Home</Link>
        </button>
      </div>
    </div>
  );
}
