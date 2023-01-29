import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../componentes/itemList";
import { db } from "../data/firebase/firebase";
import Home from "../vistas/home";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
   
    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(
          collection(db, "productos"),
          where("Categoria", "==", categoryId)
        );
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "productos"));
      }
      const ProductosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        };
        ProductosFirebase.push(product);
        console.log(product)
      });
      setProducts(ProductosFirebase);
    };
    getProducts();
    // const promesa = new Promise((acc, rec) => {
    //   setTimeout(() => {
    //     acc(products);
    //   }, 3000);
    // });
    // promesa
    //   .then((result) => {
    //     setProducts(result);
    //   })
    //   .catch(() => {
    //     alert("Hubo un error");
    //   });
  }, [categoryId]);

  return (
    <div>
      <Home />
      <div className="container">
        <div className="TituloContainer">
          <h1>En remate</h1>
        </div>
        <h1>{products.id}</h1>
        <ItemList producto={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
