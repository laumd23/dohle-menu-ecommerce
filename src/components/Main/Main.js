import React from 'react';
import style from './main.module.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDatails/ItemDetailContainer';

const Main = () => { 

  return (
    <main className={style.contenedorMain}>
        <section>
            <ItemListContainer saludo="Hola Bienvenidos a mi Galeria de Arte"/>
            <ItemDetailContainer/>
        </section>
    </main>
  )
}

export default Main
