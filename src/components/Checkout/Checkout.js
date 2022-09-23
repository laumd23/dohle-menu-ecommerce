import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Form from '../Form/Form'
import style from '../Cart/cart.module.css'

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const total = totalPrice();
  console.log(cart);

  const [idBuy, setIdBuy] = useState('');
  const handleId = (id) => {
    setIdBuy(id)
  }

  if (idBuy) {
    return <h2>Gracias por su compra!!! Su número de transacción es ${idBuy}</h2>
  }
  
  return (
    <div className={style.order}>
      <p>Orden de Compra</p>
      <div><Form cart={cart} total={total} clearCart={clearCart} handleId={handleId} /></div>
    </div>
  )
}

export default Checkout