import React, { useState, useEffect } from 'react'
import products from '../../mock/products';
import ItemDatail from './ItemDatail';
import {useParams} from 'react-router-dom'
import style from '../ItemDatails/itemDetails.module.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState();

    const { idProd } = useParams();
    const idProdN = Number(idProd);

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const oneProduct = products.find((prod) => prod.id === idProdN);
                const itDetail = idProdN ? oneProduct : products;

                setTimeout(() => {res(itDetail)}, 1000);
            });

        getProduct()
            .then((data) => {setItem(data);})
            .catch((error) => {console.log(error);});
    }, [idProdN]);
    
    return (
        <>
            {
                item ? <ItemDatail item={item}/> : <h2 className={style.h2}>Cargando...</h2>
            }
        </>
    )
}

export default ItemDetailContainer