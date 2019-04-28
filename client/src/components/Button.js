import React from 'react'

const Button = (props) => {

  const { type, className, title, onClick } = props

  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button