import React from 'react';
import './QuoteCard.css';

export default function QuoteCard() {
  return (
    <div className='quoteCard'>
      <p>"Some text that is a quote from Futurama"</p>
      <img alt="picture of character"></img>
      <h2>Character Name</h2>
    </div>
  )
}
