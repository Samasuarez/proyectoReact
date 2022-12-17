import React from "react";
import "./styleNav.css";
import CartWidget from "../CardWidget/index.jsx";
// import CartWidget from "../CardWidget";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          Anticuario
        </a>
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
              <a className="nav-link active" aria-current="page" href="/#">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
               Compramos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#">
                En remate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
               Redes sociales
              </a>
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
