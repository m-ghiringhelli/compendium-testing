export async function getQuotes() {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await response.json();
  return data;
}