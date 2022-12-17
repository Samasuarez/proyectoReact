import React from 'react';
import Card from '../componentes/Item';
import './style.css'

 const ItemListContainer = () => {
  return (
    <div className="CardContainer">
      <Card title={"Titulo 1"} />
      <Card title={"Titulo 2"} />
      <Card title={"Titulo 3"} />
      <Card title={"Titulo 4"} />
      <Card title={"Titulo 5"} />
      <Card title={"Titulo 6"} />
      <Card title={"Titulo 7"} />
      <Card title={"Titulo 8"} />
      <Card title={"Titulo 9"} />
      <Card title={"Titulo 10"} />
    </div>
  );
};

export default ItemListContainer;
