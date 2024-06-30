import React from 'react'
import styles from '../layout/module/Input.module.css';

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange} />
    </div>
  )
}

export default Input