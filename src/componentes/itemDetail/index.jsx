import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../context/ShopProvider";
import ItemCount from "../itemCount";
// import ItemCount from "./ItemCount";
import "./styles.css";

const ItemDetail = ({ detail }) => {
   

    const [quantity, setContador] = useState(0)

    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setContador(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.src} alt="detail" />
            <aside className="detail-aside">
                <h4>{detail.Detalle}</h4>
                <h4>{detail.precio}</h4>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.stock} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-primary p-2">
                        <Link className="text-light" to="/cart">
                            Ir al carrito
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;