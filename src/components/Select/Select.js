import React from 'react'

export default function Select({ callback, names}) {
  return (
    <select>
      <option selected disabled>- select a character -</option>
      {names.map((nameInstance) => (
        <option key={nameInstance} value={nameInstance}>{nameInstance}</option>
      ))}
    </select>
  )
}
