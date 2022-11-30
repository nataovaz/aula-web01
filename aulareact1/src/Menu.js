import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="itemPage">Pag 1 - Home </Link>{" "}</li>
          <li><Link to="/usuarios" className="itemPage">Pag 2 - Clientes</Link></li>
          <li><Link to="/sobre" className="itemPage"> Pag 3 - Sobre </Link></li>
          <li><Link to="/pessoas" className="itemPage"> Pag 4 - Pessoas </Link></li>
        </ul>
      </nav>
    </header>
  );
}
