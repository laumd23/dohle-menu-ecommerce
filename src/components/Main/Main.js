import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './main.module.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDatails/ItemDetailContainer';
import Cart from '../Cart/Cart'

const Main = () => { 

  return (
    <main className={style.contenedorMain}>
        <Routes>
            <Route path='/' 
                  element={<ItemListContainer saludo="Hola Bienvenidos a mi Galeria de Arte"/>}
            />
            <Route 
                path='/category/:categoryId' 
                element={<ItemListContainer/>}
            />
            <Route 
                path='/detail/:idProd'
                element={<ItemDetailContainer/>}
            />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </main>
  )
}

export default Main
