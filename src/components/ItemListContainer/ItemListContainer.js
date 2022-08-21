import React from 'react'
import style from './ItemListContainer.module.css'

const ItemListContainer = (props) => {
  return (
    <div className = {style.saludo}>
        {props.saludo}
    </div>
  )
}

export default ItemListContainer