import React from 'react'
import style from './navbar.module.css'
import styling from '../Footer/footer.module.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = (props) => {
    if(props.isHeader){
        return (
            <nav className={style.nav}>
                <h1>Reaper Crew Art</h1>
                <ul>
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
                <CartWidget/>
            </nav>
        );
    }else {
        return (
            <nav className={styling.nav}>
                <h1>Reaper Crew Art</h1>
                <ul>
                    <li>
                        <a href="https://google.com">Footer</a>
                    </li>
                    <li>
                        <a href="https://google.com">Instagram</a>
                    </li>
                    <li>
                        <a href="https://google.com">Facebook</a>
                    </li>
                    <li>
                        <a href="https://google.com">Contacto</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar