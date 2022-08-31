import React, { useState, useEffect } from 'react'
import products from '../../mock/products';
import ItemDatail from './ItemDatail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const oneProduct = products.find((product) => product.id === 1);
                setTimeout(() => {
                    res(oneProduct);
                }, 2000);
            });
        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    return (
        <ItemDatail item={item}/>
    )
}

export default ItemDetailContainer