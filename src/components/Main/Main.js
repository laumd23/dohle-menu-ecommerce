import React from 'react';
import style from './main.module.css'
//import logoReact from '../../img/logo512.png'

const Main = ({test, info}) => { 

  return (
    <main className={style.contenedorMain}>
        <section className={style.frasePrincipal}>
            <h1>"El arte habla donde las palabras son incapaces de explicar"</h1>
            <h2>{info}</h2>
            <h3>{test}</h3>  
        </section>
    </main>
  )
}

export default Main
