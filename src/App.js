//const App = () => "Hola Mundo"; //EXPORTACION NOMBRADA esto es un componente, inician con MAYUSCULAS

//export const Otra = () => "Hola Mundo";
//si la exportacion es colocando el export al componente, para importarlo se tiene que colocar import {App} from './App';

//export default App; //EXPORTACION POR DEFAULT se puede utilizar un solo export default por archivo. Se importa asi: import App from "./App";

//Fragments = <> </>

// const App = () => {
//     return (
//         <>
//             <p>Hola</p>
//             <p>Mundo</p>
//         </>
//     )
// };

//si yo quisiera que las etiquetas p no esten dentro de una etiqueta especifica, debo eliminar el nombre de la etiqueta que los envuelve, y se hace invisible para el DOM
//En caso de querer darle estilo a lo que esta dentro del fragments, no debo utilizarlos, y necesitaria etiquetas si o si.

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <Header /> 
            <Main />
            <Footer />
        </>
    )
}; //yo podria crear toda mi app desde un solo componente, pero no sería lo mejor, ni la mejor práctica. La buena práctica sería modularizar nuestros componentes, y separar/dividir componentes por funcionalidad o por tamaño.

export default App;