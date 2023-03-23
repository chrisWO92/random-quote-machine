import React from 'react'
import './quote-box.css'


const QuoteBox = ({pastel, quote}) => {
  return (
    <div id='quote-box' style={{color: pastel}}>
        <div id='quote-wrapper'>
            <div id='quote-text'>
                {quote.text}
            </div>
        </div>
        <cite id='author'>
            - {quote.author}
        </cite>
    </div>
  )
}

export default QuoteBox
