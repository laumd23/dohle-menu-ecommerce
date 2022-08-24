import React from 'react'
import style from './button.module.css'

const Button = ({value, variant}) => {
  return (
    <button className={style[variant]}>{value}</button>
  )
}

export default Button