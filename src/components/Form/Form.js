import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { dB } from '../../firebaseConfig';
import style from './form.module.css';

const Form = ({ cart, total, clearCart, handleId }) => {

  const [nombre, setName] = useState("")
  const [movil, setMovil] = useState("")
  const [email, setEmail] = useState("")
  const [emailRepeat, setEmailRepeat] = useState("")
  const [adress, setAdress] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === emailRepeat) {
      const order = {
        buyer: { nombre, movil, email, adress },
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
    } else {
      alert("Los emails deben coincidir")
    }
  }

  const changeName = (event) => { setName(event.target.value) };
  const changeMovil = (event) => { setMovil(event.target.value) };
  const changeEmail = (event) => { setEmail(event.target.value) };
  const changeEmailRepeat = (event) => { setEmailRepeat(event.target.value) };
  const changeAdress = (event) => { setAdress(event.target.value) };

  return (
    <div className={style.divForm}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Nombre </label>
          <input type="text" placeholder='Nombre...' name='nombre' value={nombre} onChange={changeName} required />
        </div>
        <div>
          <label>Móvil </label>
          <input type="text" placeholder='Móvil' name='movil' value={movil} onChange={changeMovil} required />
        </div>
        <div>
          <label>Email </label>
          <input type="email" placeholder="Email" name="email" value={email} onChange={changeEmail} required />
        </div>
        <div>
          <label htmlFor="">Confirmar Email </label>
          <input type="email" placeholder="Email" name="emailRepeat" value={emailRepeat} onChange={changeEmailRepeat} required />
        </div>
        <div>
          <label htmlFor="">Dirección </label>
          <input type="text" placeholder='Dirección' name='direccion' value={adress} onChange={changeAdress} required />
        </div>
        <div className={style.divButton}><button className={style.buttonForm}>Enviar</button></div>
      </form>
    </div>
  )
}

export default Form
