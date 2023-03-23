import React from 'react'
import './new-quote.css'

const NewQuote = ({pastel, getRandomIndex}) => {
  return (
    <button id='new-quote' style={{backgroundColor: pastel}} onClick={getRandomIndex}>
      New Quote
    </button>
  )
}

export default NewQuote
