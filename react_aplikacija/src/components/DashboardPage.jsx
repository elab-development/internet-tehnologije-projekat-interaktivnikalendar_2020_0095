import React, { useState, useEffect } from 'react';
import DashboardNavBar from './DashboardNavBar';
import axios from 'axios';

const DashboardPage = () => {
  const [quote, setQuote] = useState('');
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState(false);

  // List of quotes
  const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    // ... other quotes
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    // Fetch random quote
    setQuote(getRandomQuote());

    // Fetch random advice
    const fetchAdvice = async () => {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        setAdvice(response.data.slip.advice);
      } catch (error) {
        console.error("Error fetching the advice:", error);
        setError(true);
        setAdvice("Failed to fetch advice.");
      }
    };

    fetchAdvice();
  }, []);

  return (
    <div className="dashboard-page">
      <DashboardNavBar />
      <div className="dashboard-content">
        <h3 className="quote-title">Today's Motivational Quote</h3>
        <p className="quote-text">{quote}</p>
        <h3 className="advice-title">Today's Advice</h3>
        <p className="advice-text">{advice}</p>
        {error && <p className="error-message">Could not fetch advice.</p>}
        <div className="rhombus rhombus-left"></div>
        <div className="rhombus rhombus-right"></div>
      </div>
    </div>
  );
};

export default DashboardPage;

