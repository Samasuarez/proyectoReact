import React from 'react'
import Item from '../Item/index'
import './style.css'
const ItemList = ({productos}) => {
  return (
    <div className='containerItem'>
        {productos.map(producto => {
            return <div>
            <Item product={producto}  key={producto.id}/>
            </div>
        })}
    </div>
  )
}

export default ItemList