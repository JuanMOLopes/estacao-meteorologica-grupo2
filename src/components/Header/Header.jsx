import "./Header.css";

import { Link } from "react-router-dom";
import ModoEscuro from "../ModoEscuro/ModoEscuro";
import Navbar from "../Navbar/Navbar";

import LogoSite from "/logo-site-dark.png";

function Header(props) {
  return (
    <>
      <header>
        {/* Link do react router dom para a página inicial */}
        {/* o link vai para alguma rota que definimos no app.jsx */}
        <Link to="/"><img src={LogoSite} alt="Logo do site" /></Link>
        <h1>{props.titulo}</h1>
        <ModoEscuro />
      </header>
      <Navbar />
    </>
  );
}

export default Header;
