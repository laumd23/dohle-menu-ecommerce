import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
import style from './navbar.module.css'
import styling from '../Footer/footer.module.css'


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
                <Button value='Sign in' variant='primary' />
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