import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Item = ({ product }) => {
  return (
    <div className="containerItem" style={{width: '18rem'}}>
      <div  className="card">
      <img src={product.src} className="card-img-top" alt={`id-${product.id}`}/>
        <h5 >{product.titulo}</h5>
        <p >{product.precio}</p>
        <Link to={`/detail/${product.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
