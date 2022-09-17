import React, { useState, useEffect } from "react";
//import products from "../../mock/products";
import ItemDatail from "./ItemDatail";
import { useParams } from "react-router-dom";
import style from "../ItemDatails/itemDetails.module.css";
import { dB } from "../../firebaseConfig";
import { doc, getDoc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { idProd } = useParams();

  useEffect(() => {
    const itemCollection = collection(dB, 'products')
    const ref = doc(itemCollection, idProd)

    getDoc(ref)
    .then((res)=>{
        setItem({
            id: res.id,
            ...res.data()
        })
    })


  }, [idProd]);

  return (
    <>
      {item ? (<ItemDatail item={item} />) : (<h2 className={style.h2}>Cargando...</h2>)}
    </>
  );
};

export default ItemDetailContainer;
