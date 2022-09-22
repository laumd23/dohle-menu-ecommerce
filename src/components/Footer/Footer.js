import Navbar from '../Navbar/Navbar'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Navbar isHeader={false} />
      <h5>Copyright by Laura María Döhle</h5>
    </footer>
  )
}

export default Footer