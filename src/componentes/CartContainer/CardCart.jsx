import React, { useContext} from "react";
import { Shop } from "../context/ShopProvider";

const Card = ({ product }) => {
  const { removeProduct } = useContext(Shop);

  return (
    <tr className="contenedorCarrito ">
      <td>
        <img src={product.src} alt="table-row"></img>
      </td>
      <th scope="row">{product.id}</th>
      <td>{product.titulo}</td>
      <td>{product.precio}</td>
      <td>{product.quantity}</td>
      <td>
        <button onClick={() => removeProduct(product.id)}>Remove</button>
      </td>
    </tr>
  );
};
export default Card;
