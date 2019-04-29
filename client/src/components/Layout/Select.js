import React from "react"

const Select = props => {

  const { name, label, value, onChange, placeholder, options, required } = props

  return (
    <div className="col_half">
      <label htmlFor={name}> {label} </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default Select
