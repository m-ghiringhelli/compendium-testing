import React from 'react';
import style from './QuoteCard.css';

export default function QuoteCard({ quote }) {
  return (
    <div className={style.quoteCard}>
      <p>{quote.quote}</p>
      <img alt={`picture of ${quote.character}`} src={quote.image} />
      <h2>{quote.character.toUpperCase()}</h2>
    </div>
  )
}
