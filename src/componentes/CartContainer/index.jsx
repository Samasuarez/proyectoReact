import React, { useContext } from "react";
import { Shop } from "../context/ShopProvider";
import generateOrderObject from "../servicios/generateOrderObject";
import Card from "./CardCart";

const Cart = () => {
  const { products, countCart, total } = useContext(Shop);

const ConfirmPurchase = ()=> {
  const order = generateOrderObject 
 ({nombre: "Sama",
  email : "sama@gmail.com",
  telefono: "1158545854",
  cart: products,
  total: total(),})

console.log(order)

}
  return (
    <div style={{padding: '60px'}}>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <Card key={product.id} product={product} products={products}/>;
          })}
        </tbody>
      </table>
          <button onClick={ConfirmPurchase}>Confirmar compra</button>
    </div>
  );
};

export default Cart;