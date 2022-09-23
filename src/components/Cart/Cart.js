import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import style from './cart.module.css'
import { Link } from 'react-router-dom'
import CartDetail from './CartDetail'

const Cart = () => {
  const { cart, clearCart, removeProd, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  if (cart.length === 0) {
    return (<div className={style.emptyCart}>
      <h1>Tu carrito está vacío. Debes agregar un producto!!!</h1>
      <img src="https://res.cloudinary.com/lauradohle/image/upload/v1663157938/img-reaperArt/mini-logo_kztvei.png" alt="Logo Reaper Crew" />
      <Link to="/">Ve a ver nuestros productos</Link>
    </div>)
  }

  return (
    <div className={style.divPpal}>
      {cart.map((prod) => (
        <CartDetail key={prod.id} prod={prod} removeProd={removeProd} />
      ))}
      <div className={style.cleanCart}>
        <h4>Total: € {total}</h4>
        <button onClick={clearCart}>Borrar Carrito</button>
        <button className={style.endBuy}>
          <Link to="/checkout">Finalizar compra</Link>
        </button>
      </div>

    </div>
  )
}

export default Cart