import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import { getQuotes, getQuotesByCharacter } from "./services/quotes";
import Select from './components/Select/Select';
import style from './App.css';

export default function App() {
  const [quoteNames, setQuoteNames] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [names, setNames] = useState([]);
  const [character, setCharacter] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getQuotes();
        setQuoteNames(data);
        !character && setQuotes(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
    getData();
  }, []);
  
  useEffect(() => {
    const createNames = () => {
      const nameList = [...new Set(
        quoteNames.map((quote) => (quote.character)
      ))];
      setNames(nameList);
    }
    createNames();
  }, [quoteNames]);
 
  useEffect(() => {
    const getData = async () => {
      const data = await getQuotesByCharacter(character);
      (character && (character !== 'All')) ? setQuotes(data) : setQuotes(quoteNames);
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
