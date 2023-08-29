import React from 'react';
import quotes from '../quotes';

const QuoteGenerator = () => {
  const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById('quote').textContent = quote.text;
    document.getElementById('author').textContent = `- ${quote.author}`;
  };

  const handleNewQuoteClick = () => {
    displayRandomQuote();
  };

  React.useEffect(displayRandomQuote, []);

  return (
    <div>
      <button id="new-quote" onClick={handleNewQuoteClick}>Surprise Me</button>
    </div>
  );
};

export default QuoteGenerator;


