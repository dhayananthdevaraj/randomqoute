import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import QuoteGenerator from '../components/QuoteGenerator';

test('renders title with h1 tag', () => {
  render(<App />);
  const titleElement = screen.getByText(/Random Quote Generator/i);
  expect(titleElement.tagName).toBe('H1');
});

test('displays a quote and author name when clicking button', async () => {
  render(<App />);
  const button = screen.getByText(/Surprise Me/i);
  fireEvent.click(button);
  const quoteElement = await screen.findByText(/- .+/); // Regex to match author name
  expect(quoteElement).toBeInTheDocument();
});

test('creates "Surprise Me" button', () => {
  render(<App />);
  const button = screen.getByText(/Surprise Me/i);
  expect(button).toBeInTheDocument();
});

test('changes quote on button click', async () => {
  render(<App />);

  const button = screen.getByText(/Surprise Me/i);

  // Get initial quote author
  const initialQuoteAuthor = screen.getByText(/- .+/).textContent;

  fireEvent.click(button);

  // Wait for new quote author to appear
  await screen.findByText(/- (?!initialQuoteAuthor$).+/);

  // Get new quote author
  const newQuoteAuthor = screen.getByText(/- .+/).textContent;

  expect(newQuoteAuthor).not.toBe(initialQuoteAuthor);
});


test('displayRandomQuote() is used and performs', async () => {
  render(<App />);

  // Get initial quote text
  const initialQuoteText = screen.getByTestId('quote').textContent;

  // Click the "Surprise Me" button
  const button = screen.getByText(/Surprise Me/i);
  fireEvent.click(button);

  // Wait for a new quote to appear
  await screen.findByTestId('quote');

  // Get new quote text
  const newQuoteText = screen.getByTestId('quote').textContent;

  // Check if the quote text has changed
  expect(newQuoteText).not.toBe(initialQuoteText);
});

