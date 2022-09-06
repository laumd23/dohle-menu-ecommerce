import React, { useState, useEffect } from 'react'
import products from '../../mock/products';
import ItemDatail from './ItemDatail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { idProd } = useParams();
    const idProdN = Number(idProd);

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const oneProduct = products.find((prod) => prod.id === idProdN);
                const itDetail = idProdN ? oneProduct : oneProduct;

                setTimeout(() => {
                    res(itDetail);
                }, 100);
            });
        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idProdN]);
    
    return (
        <ItemDatail item={item}/>
    )
}

export default ItemDetailContainer