import React from 'react'
import style from './items.module.css'
import {Link} from 'react-router-dom';

const Item = ({product}) => {
    return (
      <div className={style.card}> 
          <img src={product.img} alt={product.title}/>
          <div className= {style.infoProd}>
              <h3>{product.title}</h3> 
              <h4>€ {product.price}.-</h4>
              <h5>#{product.category}</h5>
              <Link to={`/detail/${product.id}`}>
                <button className={style.buttonDetail}>Ver detalles</button>
              </Link>
          </div>    
      </div>
    )
}

export default Item