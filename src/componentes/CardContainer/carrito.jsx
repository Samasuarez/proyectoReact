import React from 'react'

const Carrito = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbarStyles">
      <div className="container-fluid">
        <a className="navbar-brand" href="paginaPrincipal.html">Bibliosama</a>
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
              <a className="nav-link" href="adquiridos.html">Adquiridos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="miCarrito.html">Mi carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Carrito