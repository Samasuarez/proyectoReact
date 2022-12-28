import { useEffect } from "react";
import { useState } from "react";

import ItemList from "../componentes/itemList";

import { productos } from "../data";
import "./style.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((acc, rec) => {
      setTimeout(() => {
        acc(productos);
      }, 3000);
    });

    promesa
      .then((result) => {
        setProducts(result);
      })
      .catch(() => {
        alert("Hubo un error");
      });
  }, []);
  console.log(products);
  return (
    <div className="container">
      <div className="TituloContainer">
        <h1>En remate</h1>
      </div>
      <h1>{productos.id}</h1>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
