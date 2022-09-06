import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import style from '../ItemDatails/itemDetails.module.css'

const ItemDatail = ({item}) => {

    const onAdd = (param) => {
        alert(param);
    };

  return (
    <div className={style.productDetail} >
        <img src={item.img} alt={item.title} />
        <div className={style.texto}>
            <h3>{item.title}</h3>
            <h3>€{item.price}.-</h3>
            <h4>{item.details}</h4>
            <h5>#{item.category}</h5>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  );
};

export default ItemDatail