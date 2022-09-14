import React from 'react'
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import style from '../ItemDatails/itemDetails.module.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemDatail = ({item}) => {
    const[cantidad, setCantidad] = useState(0);
    const {addToCart, getProductQuantity} = useContext(CartContext);

    const onAdd = (qtyItem) => {
        setCantidad(qtyItem);
        addToCart(item, qtyItem);
    };
  //variable que colocare en el initial para que me tome la cantidad de prod que hay en el carrito (si hay)
  const quantity = getProductQuantity(item.id);

  return (
    <div className={style.productDetail} >
        <img src={item.img} alt={item.title} />
        <div className={style.texto}>
            <h3>{item.title}</h3>
            <h3>€{item.price}.-</h3>
            <h4>{item.details}</h4>
            <h5>#{item.category}</h5>
          <div>
            {
              cantidad === 0  
              ? <ItemCount stock={item.stock} initial={quantity} onAdd={onAdd}/> 
              : <Link className={style.goCart}to="/cart">Finalizar compra</Link>
            }
          </div>  
        </div>
    </div>
  );
};

export default ItemDatail