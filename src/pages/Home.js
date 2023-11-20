import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";

let img = require("../img/port-pic.jpeg");

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-inner">
        <div className="text">
          <div className="headline">
            <h1>Oie,</h1>
            <h1>eu sou a Bel!</h1>
          </div>
          <div className="about-me">
            <h2>Front-End Developer && Designer.</h2>
            <h3>
              Apaixonada por arte e tecnologia, busco criar e construir produtos de Front-End com design
              atrativo e com uma experiência de usuário bem planejada.
            </h3>
            <h4>Fullstack Developer pela Trybe.</h4>
            <h4>
              Bacharel em Design pela Universidade Federal de Santa Catarina.
            </h4>
          </div>
          <div className="tags">
            <ul>
                <li>Frontend</li>
                <li>React</li>
                <li>Context API</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>UX & UI Design</li>
                <li>Graphic Design</li>
            </ul>
          </div>
          <div className="redes">
            <ul> Estou:
                <li><a href="https://github.com/belbarros">no github</a></li>
                <li><a href="https://www.linkedin.com/in/belbarros/">no linkedin</a></li>
            </ul>
          </div>
          <Link to="/projetos">
          <button className="project-button">Projetos →</button>
        </Link>
        </div>
        <div className="img">
            <img src={img} alt="Uma foto minha, com flores no fundo. Estou de oculos escuros, olhando para o lado e sorrindo." />
        </div>
      </div>
    </div>
  );
}
