import React from "react";
import "./styleNav.css";
import CartWidget from "../CardWidget/index.jsx";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbarStyles">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand ">
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
                <Link
                  to="/category/Pinturas"
                  className="nav-link active"
                  aria-current="page"
                >
                  Pinturas
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/category/Joyeria"
                >
                  Joyeria
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/category/Muebles"
                >
                  Muebles
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/category/Porcelana"
                >
                  Porcelana
                </Link>
              </li>
            </ul>
          </div>
          <div className="WitgetCont">
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
}
