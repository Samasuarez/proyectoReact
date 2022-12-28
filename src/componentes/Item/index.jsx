import React from "react";
import "./style.css";

const Item = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.src} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.titulo}</h5>
        <p className="card-text">{product.categoria}</p>
        <p className="card-text">{product.precio}</p>
        <hr></hr>
        <a href="/#" className="btn btn-primary">
          {product.estado}
        </a>
      </div>
    </div>
  );
};

export default Item;
