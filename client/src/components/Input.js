import React from 'react'

const Input = (props) => {
  return(
    <div className="col_half">
      <label htmlFor={props.name}>{props.title}</label>
      <div className="input_field">
        <input 
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        title={props.title}
        />
      </div>
    </div>
  )
}

export default Input