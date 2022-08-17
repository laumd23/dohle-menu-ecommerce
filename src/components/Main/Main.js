import React from 'react';
import style from './main.module.css'

const Main = () => {
  return (
    <main className={style.contenedorMain}>
        <section>
            <h2>"El arte habla donde las palabras son incapaces de explicar"</h2>
        </section>
    </main>
  )
}

export default Main

//con react para darle clase a una etiqueta, utilizamos className.