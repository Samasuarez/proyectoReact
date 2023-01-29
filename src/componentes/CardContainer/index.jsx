import React, { useContext } from 'react'
import { Shop } from '../context/ShopProvider';
import Carrito from './carrito';

const Cart = () => {

  const {productos} = useContext(Shop);

  console.log(productos)

  return (
    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Img</th>
          <th scope="col">titulo</th>
          <th scope="col">categoria</th>
          <th scope="col">agregar</th>
          <th scope="col">remover</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(producto => {
          return <Carrito key={producto.id} product={producto}/>
        })}
      </tbody>
    </table>
  )
}

export default Cart