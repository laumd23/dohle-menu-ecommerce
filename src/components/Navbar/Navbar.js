import React from 'react'
import style from './navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className={style.listNone}>
                    <h1>Reaper Crew Art</h1>
                </li>
                <li>
                    <a href="https://google.com">Inicio</a>
                </li>
                <li>
                    <a href="https://google.com">Quien soy</a>
                </li>
                <li>
                    <a href="https://google.com">Pinturas y Dibujos</a>
                </li>
                <li>
                    <a href="https://google.com">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar