import React from "react";
import {BsCashCoin} from "react-icons/bs";
import {MdPointOfSale} from "react-icons/bs";
import {MdLocalShipping}  from "react-icons/bs";
import {BsFillChatDotsFill} from "react-icons/bs";
const Nosotros = () => {
  return (
    <div className="text-nosotros">
      <div className="card-nosotros">
        <span><BsCashCoin/></span>
        <h4>Cotización</h4>
        <p>Sin cargo, ya sea virtual o personalmente al 1171093703</p>
      </div>
      <div className="card-nosotros">
      <span><MdPointOfSale/></span>
        <h4>Compramos en el acto</h4>
        <p>
          Operaciones simples y con absoluta reserva. Nuestros 51 años de
          experiencia nos avalan.
        </p>
      </div>
      <div className="card-nosotros">
      <span><MdLocalShipping/></span>
        <h4>La comodidad primero</h4>
        <p>
          Nos encargamos del retiro de la mercadería con personal especializado.
          Envíos internacionales.
        </p>
      </div>
      <div className="card-nosotros">
      <span><BsFillChatDotsFill/></span>
        <h4>Pagamos en efectivo</h4>
        <p>Pesos / Dólares</p>
      </div>
    </div>
  );
};
export default Nosotros;
