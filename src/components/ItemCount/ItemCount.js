import React, { useState } from 'react'
import { useEffect } from 'react';
import style from '../ItemCount/itemCount.module.css'

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial)
  }, [initial])

  const sumar = () => {
    count < stock ? setCount(count + 1) : alert("Máximo stock");
  }

  const restar = () => {
    count > initial && setCount(count - 1);
  }

  return (
    <div className={style.container}>
      <div className={style.contador}>
        <div className={style.bottonSumaResta}>
          <button onClick={restar}>-</button>
          <button onClick={sumar}>+</button>
          <p>{count}</p>
        </div>
        <div className={style.agregarCarrito}>
          <button onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount