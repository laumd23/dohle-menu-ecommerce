import React from 'react'
import Item from './Item'
import style from './items.module.css'

const ItemList = ({items}) => {
  return (
    <div  className={style.fatherCard}>
        {
            items.map ((product) => {
              return (
                <Item product ={product} key={product.id}/>
              )
            })
        }
    </div>
  )
}

export default ItemList