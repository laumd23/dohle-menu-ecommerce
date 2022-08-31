import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import style from './items.module.css'

const Item = ({product}) => {
    
    const onAdd = (param) => {
        alert(param);
    }
    
  return (
    <div className={style.card}> 
        <img src={product.img} alt="Imagenes pinturas y dibujos en venta"/>
        <h3>{product.title}</h3> 
        <h5>€ {product.price}.-</h5>
        <div><ItemCount stock={10} initial={1} onAdd={onAdd}/></div>
    </div>
  )
}

export default Item