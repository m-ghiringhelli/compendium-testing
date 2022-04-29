import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import { getQuotes, getQuotesByCharacter } from "./services/quotes";
import Select from './components/Select/Select';
import style from './App.css';

export default function App() {
  const [quotes, setQuotes] = useState([]); // array of quotes to display
  const [names, setNames] = useState([]); // names of characters derived from quote data
  const [character, setCharacter] = useState(''); // selected character
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  // load all quotes and set initial display
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getQuotes();
        !character && setQuotes(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
    getData();
  }, []);
  
  // set values for dropdown
  useEffect(() => {
    const getNames = async () => {
      const data = await getQuotes();
      const nameList = [...new Set(
          data.map((quote) => (quote.character)
          )
      )];
      setNames(nameList);
    }
    getNames();
  }, []);
 
  // update array of quotes when select changes
  useEffect(() => {
    const getData = async () => {
      const data = (character === 'All') ? 
        await getQuotes() : 
        await getQuotesByCharacter(character);
      setQuotes(data);
    }
    getData();
  }, [character]);

  if (loading) return <p>loading...</p>;

  return (
    <>
      <p>{errorMessage}</p>
      <Select callback={setCharacter} names={names}/>
      <div className={style.quoteContainer}>
        {quotes.map((quote) =>
          <div key={quote.quote}>
            <QuoteCard quote={quote}/>
          </div>
        )}
      </div>
    </>
  );
}
