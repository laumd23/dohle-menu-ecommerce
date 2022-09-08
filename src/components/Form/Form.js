import React, { useState } from 'react';
import style from './form.module.css';

const Form = () => {

    const [nombre, setName] = useState("")
    const [movil, setMovil] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log (nombre, movil, email);
        setName('');
        setMovil('');
        setEmail('');
    }

const changeName = (event) => {
    setName(event.target.value)
};
const changeMovil = (event) => {
    setMovil(event.target.value)
};
const changeEmail = (event) => {
    setEmail(event.target.value)
};

  return (
    <div className={style.divForm}>
        <form action="" onSubmit = {handleSubmit}>
            <div>
                <p>Déjanos tus datos si tienes alguna duda o sugerencia y te contactaremos</p>
            </div>
            <div>
                <input type="text" placeholder='Nombre...' name='nombre' value={nombre} onChange={changeName}/>
            </div>
            <div>
                <input type="text" placeholder='Móvil' name='movil' value={movil} onChange={changeMovil}/>
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" value={email} onChange={changeEmail}/>
            </div>
            <div className={style.divButton}><button className={style.buttonForm}>Enviar</button></div>
        </form>
    </div>
  )
}

export default Form