
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import Main from './components/Main/Main'

const App = () => {

    const onAdd = (param) => {
        alert(param);
    }

    const info = "Dibujos y Pinturas";

    return (
        <>
            <Header />
            <ItemListContainer saludo="Hola Bienvenidos a mi Galeria de Arte"/>
            <Main test="Venta de Arte" info={info}/>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
            <Footer /> 
        </>
    )
}; 

export default App;