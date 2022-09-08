import React, {useState} from 'react'
import style from '../ItemCount/itemCount.module.css'

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(1); 
  
  const sumar = () =>{
    count < stock ? setCount(count + 1) : alert("Máximo stock");
  }

  const restar = () =>{
     count > initial ? setCount(count - 1) : alert("Desea eliminar el producto del carrito?");
  }

  return (  
  <div className={style.container}>
    <div  className={style.contador}>
      <div className={style.bottonSumaResta}>
          <button onClick={restar}>-</button>
          <p> {count} </p>
          <button onClick={sumar}>+</button>
      </div>
      <div className={style.agregarCarrito}>
        <button onClick= {()=>onAdd (count)} >Agregar al carrito</button>
      </div>
    </div>
  </div>
  )
}

export default ItemCount