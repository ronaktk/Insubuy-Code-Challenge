import React from 'react'

import './Index.css'

const Quote = (props) => {

  const { price, name, description, type, section, bestSellers} = props

  return(
    <div className="quote-plan">
      {bestSellers ? (
        <h5>Best Seller</h5>
      )
      :(
        <h5></h5>
      )}
      <p className="price"><sup>$</sup>{price}<sub>K/yr</sub></p>
      <ul className='quote-info'>
        <li>{name}</li>
        <li>{section}</li>
        <li>{description}</li>
        <li>{type}</li>
      </ul>
      <button url='#' className='btn'>Compare</button>
    </div>
  )
} 

export default Quote