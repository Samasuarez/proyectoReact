import React, { useContext } from "react";
import { Shop } from "../context/ShopProvider";
import generateOrderObject from "../servicios/generateOrderObject";
import Card from "./CardCart";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../data/firebase/firebase";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import FormCompra from "../formCompra/formCompra";
const Cart = () => {
  const { products, countCart, total, cleanCart } = useContext(Shop);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState();

  const renderBtnConfirm = () => {
    let res = <button className="btn btn-success" onClick={ConfirmPurchase}>Confirmar compra</button>;
    if (!formData) {
      res = (
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Continuar compra
        </button>
      );
    }
    return res;
  };

  const ConfirmPurchase = async () => {
    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.tel,
        cart: products,
        total: total(),
      });

      console.log(order);
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart();
      for (const productCart of products) {
        const productRef = doc(db, "productos", productCart.id);
        await updateDoc(productRef, {
          stock: productCart.stock - productCart,
        });
      }
      alert("Su orden fue confirmada, en breve nos comunicaremos", docRef.id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div
      style={{
        padding: "60px",
      }}
    >
      <FormCompra setFormData={setFormData}></FormCompra>
      {products.length !== 0 ? (
        <>
          <table className="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">producto</th>
                <th scope="col">precio</th>
                <th scope="col">cant</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <Card
                    key={product.id}
                    product={product}
                    products={products}
                  />
                );
              })}
            </tbody>
          </table>

          <div style={{ textAlign: "end" }}>
            <h4>Total: ${total()}</h4>
          </div>
          {loader ? (
            <h4>Cargando...</h4>
          ) : (
            <div style={{ textAlign: "end" }}>{renderBtnConfirm()}</div>
          )}
        </>
      ) : (
        <>
          <h1>
            No hay productos en el carrito. Ir a {<Link to="/">Home</Link>}
          </h1>
        </>
      )}
    </div>
  );
};

export default Cart;
