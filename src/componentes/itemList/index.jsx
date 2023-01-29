import React from "react";
import Item from "../Item/index";

const ItemList = ({ productos }) => {
  return (
    <div className="containerItem">
      {productos.map((producto) => {
        return (
          <div key={producto.id}>
            <Item product={producto}  />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
