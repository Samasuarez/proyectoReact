import React from "react";

const Card = ({product}) => {
  return (
    <div className="tarjetaCarrito" style='overflow: hidden'>
      <a>{product.id}</a>
      <img src={product.src} alt="table-row"></img>
      <p style='font-weight: bold'>{product.titulo}</p>
      <p>{product.categoria}</p>
      <p style='margin-left: auto'>{product.precio}</p>
      <button className="material-symbols-outlined" style='cursor: pointer; margin-left: 10px; color: red'>Elliminar</button>
    </div>
  );
};
export default Card;