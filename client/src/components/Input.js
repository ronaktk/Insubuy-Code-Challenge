import React from 'react'

const Input = (props) => {

  const { type, name, value, placeholder, onChange, title } = props

  return(
    <div className="col_half">
      <label htmlFor={props.name}>{props.title}</label>
      <div className="input_field">
        <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        title={title}
        />
      </div>
    </div>
  )
}

export default Input