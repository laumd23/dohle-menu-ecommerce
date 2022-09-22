import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import style from './navbar.module.css';
import styling from '../Footer/footer.module.css';
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  if (props.isHeader) {
    return (
      <nav className={style.nav}>
        <div className={style.logo}>
          <Link to="/" className={style.reaper}>Reaper Crew Art
            <br></br>
            <img src="https://res.cloudinary.com/lauradohle/image/upload/v1663252805/img-reaperArt/mini-nombre_p2z549.png" alt="Nombre del artista" /></Link>
        </div>


        <ul>
          <Link to="/category/pinturas">Pinturas</Link>

          <Link to="/category/dibujos">Dibujos</Link>

          <Link to="/category/oleos">Oleos</Link>

          <Link to="/quienSoy">Quien Soy</Link>

        </ul>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className={styling.nav}>
        <div className={style.logo}>
          <Link to="/" className={style.reaper}>Reaper Crew Art
            <br></br>
            <img src="https://res.cloudinary.com/lauradohle/image/upload/v1663252805/img-reaperArt/mini-nombre_p2z549.png" alt="Nombre del artista" /></Link>
        </div>
        <ul>
          <Link to="/">Home</Link>
          <a href="https://www.instagram.com/marianobaez.art/?hl=es">Instagram</a>
          <Link to="/contact">Contacto</Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar