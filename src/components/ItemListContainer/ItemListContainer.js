import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import style from './ItemListContainer.module.css';
import products from '../../mock/products';
import ItemList from '../Items/ItemList';


const ItemListContainer = (props) => {
  
  const [items, setItems] = useState ([]);
  const { categoryId } = useParams();

  useEffect(()=> {
      const getProducts = 
      new Promise ((resolve, reject) =>{
        const prodFilter = products.filter ((prod) => prod.category === categoryId)
        const prod = categoryId ? prodFilter: products; 

        setTimeout(()=>{ 
            resolve(prod);
        }, 1000);
      });
  
      getProducts
          .then((data)=>{setItems(data)})
          .catch ((error)=> {console.log(error)});
          return () => {
            setItems([])
          }
  }, [categoryId]);

  return (
    <>
      <div className = {style.saludo}>
        {props.saludo}
      </div>
      {
       items.length ? <ItemList items={items}/> : <h2>Cargando...</h2>
      }
    </>
  )
} 

export default ItemListContainer