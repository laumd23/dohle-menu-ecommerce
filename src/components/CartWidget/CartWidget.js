import React from 'react'
import style from './cartWidget.module.css'
import {BsCartCheck} from "react-icons/bs"

const CartWidget = () => {
  return (
    <div className={style.icono}>
      <BsCartCheck size={30}/>
      <span>0</span>
    </div> 
    
  )
}

export default CartWidget