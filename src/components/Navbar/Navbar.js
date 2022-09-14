import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import style from './navbar.module.css';
import styling from '../Footer/footer.module.css';
import {Link} from 'react-router-dom'


const Navbar = (props) => {
    if(props.isHeader){
        return (
            <nav className={style.nav}>
                <Link to="/" className={style.reaper}>Reaper Crew Art</Link>

                <ul>
                    <Link to="/category/pinturas">Pinturas</Link>
                    
                    <Link to="/category/dibujos">Dibujos</Link>
                       
                    <Link to="/quienSoy">Quien Soy</Link>
                    
                    <Link to="/contact">Contacto</Link>           
                </ul>
                
                <Link to="/cart">
                    <CartWidget/>
                </Link>
            </nav>
        );
    }else {
        return (
            <nav className={styling.nav}>
                <h1>Reaper Crew Art</h1>
                <ul>
                        <Link to = "/">Home</Link>
                        <a href="https://www.instagram.com/marianobaez.art/?hl=es">Instagram</a>
                        <Link to="/contact">Contacto</Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar