import React from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        {/* Quote and author will be displayed here */}
        <div id="quote-container">
          <p id="quote" data-testid="quote">Loading...</p>
          <p id="author">Author</p>
        </div>
        <QuoteGenerator />
      </header>
    </div>
  );
}

export default App;
