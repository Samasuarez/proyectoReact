import React from "react";
import "./styleNav.css";
import CartWidget from "../CardWidget/index.jsx";
import {Link} from 'react-router-dom';
// import CartWidget from "../CardWidget";
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/#">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#">
               Compramos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#">
                En remate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#">
               Redes sociales
              </Link>
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
