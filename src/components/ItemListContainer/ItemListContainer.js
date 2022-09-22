import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './ItemListContainer.module.css';
import ItemList from '../Items/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dB } from '../../firebaseConfig';

const ItemListContainer = (props) => {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemsCollection = collection(dB, "products");
    const itemsToShow = !categoryId ? itemsCollection : query(itemsCollection, where("category", "==", categoryId))

    getDocs(itemsToShow)
      .then((resp) => {
        const products = resp.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data()
          }
        })
        setItems(products);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [categoryId]);



  return (
    <>
      <div className={style.saludo}>
        {props.saludo}
      </div>
      {
        items.length ? <ItemList items={items} /> : <h2>Cargando...</h2>
      }
    </>
  )
}

export default ItemListContainer
