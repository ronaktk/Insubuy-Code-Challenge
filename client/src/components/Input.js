import React from 'react'

const Input = (props) => {

  const { id, type, label, name, value, placeholder, onChange, title, required, pattern } = props

  return(
    <div className="col_half">
      <label>{props.label}</label>
      <div className="input_field">
        <input 
        type={type}
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        title={title}
        required={required}
        pattern={pattern}
        />
      </div>
    </div>
  )
}

export default Input