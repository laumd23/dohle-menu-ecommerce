import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import style from './cart.module.css'

const Cart = () => {
  const {cart, clearCart, removeProd} = useContext(CartContext);
  console.log(cart);

  return (
    <div className={style.divPpal}>
      {cart.map((prod)=> (       
        <div key={prod.id}> 
            <img src={prod.img} alt={prod.title}/>
            <h4> {prod.title}</h4>
            <h4>€ {prod.price}.-</h4>
            <button onClick={()=>removeProd(prod.id)}>Eliminar</button>
        </div>
      ))}
      
      <div>
        <button onClick={ clearCart }>Borrar Carrito</button>
      </div>
    </div>
  )
}

export default Cart