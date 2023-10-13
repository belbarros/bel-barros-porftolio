import Header from "../components/Header";
import ProjectCard from '../components/ProjectCard'
import { Link } from "react-router-dom";
import projects from "../content/projects";
import './Projects.css';

export default function Projects() {
    return(
        <div className="projects">
            <Header />
            <div className="projects-inner">
            <h1>Projetos</h1>
            <div>
                {
                    projects.map((project) => (<ProjectCard project={project} key={project.name}/>))
                }
            </div>
            <button className="home-button">
                <Link to="/">
                ← Home
                </Link>
            </button>
            </div>
        </div>
    )
}

//Adicionar um filtro