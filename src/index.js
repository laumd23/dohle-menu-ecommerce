import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //export por default

//import {Otra} from './App'; //export nombrado

//En caso de querer importar varios componentes, se puede colocar import App(exportacion default), {Otra}(exportacion nombrada) from "./App"; 

// PARA IMPORTAR CSS hay que colocar la extension
//import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


