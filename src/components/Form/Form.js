import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { dB } from '../../firebaseConfig';
import style from './form.module.css';

const Form = ({ cart, total, clearCart, handleId }) => {

  const [nombre, setName] = useState("")
  const [movil, setMovil] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { nombre: nombre, movil: movil, email: email, direccion: adress },
      items: cart,
      total: total,
      date: serverTimestamp()
    }

    const ordersCollection = collection(dB, 'orders')
    addDoc(ordersCollection, order)
      .then((res) => {
        handleId(res.id)
        clearCart()
      })
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
  const changeAdress = (event) => {
    setAdress(event.target.value)
  };

  return (
    <div className={style.divForm}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='Nombre...' name='nombre' value={nombre} onChange={changeName} />
        </div>
        <div>
          <input type="text" placeholder='Móvil' name='movil' value={movil} onChange={changeMovil} />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" value={email} onChange={changeEmail} />
        </div>
        <div>
          <input type="text" placeholder='Dirección' name='direccion' value={adress} onChange={changeAdress} />
        </div>
        <div className={style.divButton}><button className={style.buttonForm}>Enviar</button></div>
      </form>
    </div>
  )
}

export default Form
