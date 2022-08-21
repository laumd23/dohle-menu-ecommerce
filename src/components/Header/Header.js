import Navbar from '../Navbar/Navbar';
import style from './header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Navbar isHeader = {true}/>   
        </header>
    )
}

export default Header;