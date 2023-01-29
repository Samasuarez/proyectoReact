import React from "react";
import "./styleNav.css";
import CartWidget from "../CardWidget/index.jsx";
import {Link} from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Anticuario
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/category/id">Iluminacion</Link>
          <Link className="dropdown-item" to="/category/id">Porcelana</Link>
          <Link className="dropdown-item" to="/category/id">Cristales</Link>
          <Link className="dropdown-item" to="/category/id">Esculturas</Link>
          <Link className="dropdown-item" to="/category/id">Joyeria</Link>
          <Link className="dropdown-item" to="/category/id">Pinturas</Link>
          <Link className="dropdown-item" to="/category/id">Plateria</Link>
          <Link className="dropdown-item" to="/category/id">Arte oriental</Link>
          <Link className="dropdown-item" to="/category/id">Vidrios artisticos</Link>
        </div>
      </li>
          </ul>
        </div>
        <div className="WitgetCont">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
