
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <>
            <Header /> 
            <ItemListContainer saludo="Hola Bienvenidos a mi Galeria de Arte"/>
            <Footer />
        </>
    )
}; 

export default App;