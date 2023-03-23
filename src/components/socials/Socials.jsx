import React from 'react'
import './socials.css'
import {TfiTwitterAlt} from 'react-icons/tfi'
import {TfiLinkedin} from 'react-icons/tfi'

const Socials = ({pastel, quote}) => {

  const tweetURL = `https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`;
  const linkedInURL = 'https://www.linkedin.com/in/cristian-pineda-developer/'

  return (
    <div id='socials'>
      <a className='social-btn' href={tweetURL} target='_blank' rel='noreferrer' id="tweet-quote" style={{backgroundColor: pastel}}>
        <TfiTwitterAlt />
      </a>
      <a className='social-btn' href={linkedInURL} target='_blank' rel='noreferrer' id="linkedIn-quote" style={{backgroundColor: pastel}}>
        <TfiLinkedin />
      </a>
    </div>
  )
}

export default Socials
