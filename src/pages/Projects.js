import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Projects() {
    return(
        <div>
            <Header />
            Projetos
            <button>
                <Link to="/">
                    Home
                </Link>
            </button>
        </div>
    )
}