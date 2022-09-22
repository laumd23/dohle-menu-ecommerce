import React from 'react';
import style from './quienSoy.module.css'

const QuienSoy = () => {
  return (
    <div className={style.quienSoy}>
      <h1>Sobre el Artista</h1>
      <div className={style.imgContainer}>
        <img src="https://res.cloudinary.com/lauradohle/image/upload/v1663267341/img-reaperArt/artista_pyv2vp.png" alt="foto-personal-del-artista-Mariano-A-Baez" id="fotoPersonal" />
      </div>
      <div >
        <p>Nacido en la ciudad de Rosario-Argentina en el año 1985. Influenciado por su padre; artista, comienza sus estudios en dibujo y pintura a muy temprana edad en la academia de Raúl Domínguez (Pintor Impresionista). Ya en su adultez, inicia la carrera Universitaria  de Bellas Artes, alternando aprendizaje en Arte Digital en la Escuela de Dibujo Baroccelli, de su ciudad natal. Siempre se ha visto cercano a la cultura del tatuaje, por lo que a dia de hoy no solo se dedica a pintar y dibujar sino que también decide incursionar en esta nueva técnica, realizandolo desde 2014 a dia de hoy, siendo su principal medio de vida. En estos momento se encuentra viviendo en Valencia-España, trabajando allí y en varias ciudades del Reino Unido también.</p>
      </div>

    </div>
  )
}

export default QuienSoy