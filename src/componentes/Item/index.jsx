import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Item = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img className="card-img-top" src={product.src} alt={`id-${product.id}`}/>
        <p className="card-title">{product.titulo}</p>
        <p className="card-text">{product.categoria}</p>
        <p className="card-text">$ {product.precio}</p>
        <hr></hr>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">
          {product.estado}
        </Link>
      </div>
    </div>
  );
};

export default Item;
