
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../data/firebase/firebase';
import ItemDetail from '../itemDetail';


const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()


  useEffect(()=> {

   db.map
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(json => {
        console.log(json)
        setDetail(json)
      })
      .catch((err) => {
        alert("Hubo un error")
      });

  }, [id])

  return (
    <div>
     
        {
          Object.keys(detail).length === 0 
            ? <h2>Loading ...</h2>
            : <ItemDetail detail={detail}/>
        }
    </div>
  )
}

export default ItemDetailContainer