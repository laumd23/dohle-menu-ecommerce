import React, { useEffect, useState } from 'react'
import EjemploApiList from './EjemploApiList';

const EjemploApi = () => {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
        .then((resp) => resp.json()) 
        .then((resp) => {
          setItems(resp);
        }) 
        .catch((error) => {
            console.log(error)
        })
        .finally (() => {
          setIsLoading(false);
        });
  }, [])
  

  return (
    <div>
        {isLoading ? (<h1>Cargando Productos...</h1>) :
         (<EjemploApiList items={items}/>)}   
    </div>
  )
}

export default EjemploApi
