import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import { getQuotes } from "./services/quotes";
import Select from './components/Select/Select';
import style from './App.css';

export default function App() {
  const [names, setNames] = useState([]);
  const [character, setCharacter] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getQuotes();
        setQuotes(data);
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
        quotes.map((quote) => (quote.character)
      ))];
      console.log(nameList);
      setNames(nameList);
    }
    createNames();
  }, [quotes]);
 
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
