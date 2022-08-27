import React, { useState, useEffect } from 'react'
import style from './ItemListContainer.module.css'
import products from '../../mock/products'
import ItemList from '../Items/ItemList';


const ItemListContainer = (props) => {
  
  const [items, setItems] = useState ([]); 

  useEffect(()=> {


      const getProducts = new Promise ((resolve, reject) =>{
      setTimeout(()=>{ 
          resolve(products);
      }, 2000);
    });

    getProducts
        .then((data)=>{ 
            setItems(data);
        })
  }, []);

  return (
    <>
      <div className = {style.saludo}>
        {props.saludo}
      </div>
      <div>
        <ItemList items={items}/>
      </div>
    </>
  )
}

export default ItemListContainer