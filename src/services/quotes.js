export async function getQuotes() {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await response.json();
  return data;
}

export async function getQuotesByCharacter(character) {
  const response = await fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}`);
  const data = await response.json();
  return data;
}