import { useState } from "react";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import { getQuotes } from "./services/quotes";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  const getData = async () => {
    const data = await getQuotes();
    setQuotes(data);
  }

  getData();

  return (
    <>
      {quotes.map((quote) =>
        <div key={quote.quote}>
          <QuoteCard quote={quote}/>
        </div>
      )}
    </>
  );
}
