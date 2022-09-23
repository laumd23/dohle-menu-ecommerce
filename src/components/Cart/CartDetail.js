import React from 'react'
import style from './cart.module.css'

const CartDetail = ({prod, removeProd}) => {
  return (
    <div className={style.divSecond}>
      <img src={prod.img} alt={prod.title} />
      <h3> {prod.title}</h3>
      <h4>Cantidad: {prod.qtyItem}</h4>
      <h4>Precio: € {prod.price}.-</h4>
      <button onClick={() => removeProd(prod.id)}>Eliminar</button>
    </div>
  )
}

export default CartDetail

