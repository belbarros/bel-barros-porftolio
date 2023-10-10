import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home-inner">
        <div className="text">
          <div className="headline">
            <h1>Olá,</h1>
            <h1>sou a Bel!</h1>
          </div>
          <div className="about-me">
            <h2>Front-End Developer && UI Designer.</h2>
            <h3>
              Apaixonada por criar e construir produtos de Front-End com design
              atrativo e com uma experiência de usuário bem planejada.
            </h3>
            <h4>Fullstack Developer pela Trybe</h4>
            <h4>
              Bacharel em Design pela Universidade Federal de Santa Catarina
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
            <ul>
                <li>github</li>
                <li>linkedin</li>
                <li>behance</li>
            </ul>
          </div>
        </div>
        <div className="img">
            <img src="" alt="" />
        </div>
        <Link to="/projetos">
          <button className="project-button">Projetos →</button>
        </Link>
      </div>
    </div>
  );
}
