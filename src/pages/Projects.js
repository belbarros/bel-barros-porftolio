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
        let content = projects;
        
        if (!frontFilter) {
            content = projects.filter((project) => project.tags.includes('projeto pessoal'));
            console.log(content)
        }
        return content;
    }
    
    let siteContent = filterContent();

  return (
    <div className="projects">
      <Header />
      <div className="projects-inner">
        <h1>Projetos</h1>
        <div className="links">
            <button onClick={() => setFrontFilter(true)}>front-end</button>
            <button onClick={() => setFrontFilter(false)}>back-end && fullstack</button>
        </div>
        <div className="project-cards">
            {console.log(siteContent)}
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
