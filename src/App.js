import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
