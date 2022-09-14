import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import style from './cart.module.css'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {cart, clearCart, removeProd, totalPrice} = useContext(CartContext);
  console.log(cart);

  if (cart.length ===0) {
    return (<div className={style.emptyCart}>
       <h1>Tu carrito está vacío. Debes agregar un producto!!!</h1>
       <img src="https://res.cloudinary.com/lauradohle/image/upload/v1663157938/img-reaperArt/mini-logo_kztvei.png" alt="Logo Reaper Crew"/>
       <Link to = "/">Ve a ver nuestros productos</Link>
    </div>)
    
  }
  return (
    <div className={style.divPpal}>
      {cart.map((prod)=> (       
        <div className={style.divSecond} key={prod.id}> 
            <img src={prod.img} alt={prod.title}/>
            <h3> {prod.title}</h3>
            <h4>Cantidad: {prod.qtyItem}</h4>
            <h4>Precio: € {prod.price}.-</h4>
            <button onClick={()=>removeProd(prod.id)}>Eliminar</button>
        </div>
      ))}
      
      <div className={style.cleanCart}>
        <h4>Total: € {totalPrice()}</h4>
        <button onClick={ clearCart }>Borrar Carrito</button>
      </div>
    </div>
  )
}

export default Cart