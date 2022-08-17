import Navbar from '../Navbar/Navbar';
import style from './header.module.css'

const Header = () => {
    return (
        <header className={style.contenedorMain}>
            <Navbar/>   
        </header>
    )
}

export default Header;