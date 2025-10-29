import "./Navbar.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/o-projeto">Projeto</Link>
      <Link to="/simulacao-wokwi">Simulação Wokwi</Link>
      <Link to="/hardware">Hardware</Link>
      <Link to="/software">Software</Link>
      <Link to="/perguntas-e-respostas">FAQ</Link>
      <Link to="/resultados">Resultados</Link>
      <Link to="/grupo">Grupo</Link>
    </nav>
  );
}

export default Nav;
