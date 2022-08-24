import React from 'react'
import style from './cartWidget.module.css'
import {BsCartCheck} from "react-icons/bs"

const CartWidget = () => {
  return (
    <div className={style.icono}>
      <a href="https://google.com"><BsCartCheck size={30}/></a>
      <span>0</span>
    </div>
    
  )
}

export default CartWidget