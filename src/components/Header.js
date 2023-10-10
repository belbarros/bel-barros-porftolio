import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="esquerda">
        <ul>
          <li>
            <Link to="/">belbarros.</Link>
          </li>
          <li>
            <Link to="/projetos">projetos</Link>
          </li>
        </ul>
        </div>
        <div className="direita">
          <ul>
            <li>
              <a href="https://github.com/belbarros" target="_blank">
                github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/belbarros/" target="_blank">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
