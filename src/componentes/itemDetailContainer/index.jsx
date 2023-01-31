
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../data/firebase/firebase';
import ItemDetail from '../itemDetail';


const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const {id} = useParams()
  
 useEffect(()=> {

    const getProduct = async () => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
   
        console.log("No such document!");
      }
    }
    getProduct();
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