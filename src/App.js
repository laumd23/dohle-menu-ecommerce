
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

const App = () => {

    const info = "Dibujos y Pinturas";

    return (
        <>
            <Header />           
            <Main test="Venta de Arte" info={info}/>
            <Footer /> 
        </>
    )
}; 

export default App;