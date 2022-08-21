import React from 'react'
import style from './cartWidget.module.css'

const CartWidget = () => {
  return (
    <div className={style.icono}>
      <a href="https://google.com"><span className='material-icons'>shopping_cart</span></a>
    </div>
  )
}

export default CartWidget