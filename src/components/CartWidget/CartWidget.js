import React from 'react'
import style from './cartWidget.module.css'
import {BsCartCheck} from "react-icons/bs"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <div className={style.icono}>
      <BsCartCheck size={30}/>
      <span>{totalQuantity() === 0 ? "" : totalQuantity()}</span>
    </div> 
    
  )
}

export default CartWidget