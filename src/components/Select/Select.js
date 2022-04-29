import React from 'react'

export default function Select({ callback, names}) {
  return (
    <select onChange={(e) => {
      callback(e.target.value);
    }}>
      <option selected disabled>- select a character -</option>
      <option>All</option>
      {names.map((nameInstance) => (
        <option key={nameInstance} value={nameInstance}>{nameInstance}</option>
      ))}
    </select>
  )
}
