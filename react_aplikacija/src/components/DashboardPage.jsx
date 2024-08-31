/*import React from 'react';
import DashboardNavBar from './DashboardNavBar';

const DashboardPage = () => {

  const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success usually comes to those who are too busy to be looking for it.  — Henry David Thoreau",
    "Do not be embarrassed by your failures, learn from them and start again. — Richard Branson",
    "If you really look closely, most overnight successes took a long time. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "It is our choices that show what we truly are, far more than our abilities. — J.K. Rowling",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
    "Dream bigger. Do bigger. — Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
    "Wake up with determination. Go to bed with satisfaction. — Unknown",
    "Do something today that your future self will thank you for. — Unknown",
    "Little things make big days. Great things take time. Be patient. — Unknown",
    "The key to success is to focus on goals, not obstacles. — Unknown",
    "Dream it. Wish it. Do it. — Unknown",
    "Success doesn’t just find you. You have to go out and get it. — Unknown",
    "The harder you work, the luckier you get. — Unknown",
    "Dream it. Believe it. Build it. — Unknown",
    "Motivation is what gets you started. Habit is what keeps you going. — Jim Ryun",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Great things never come from comfort zones. — Unknown",
    "Dream it. Believe it. Achieve it. — Unknown",
    "Wake up with determination. Go to bed with satisfaction. — Unknown",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. — Unknown",
    "Hard work beats talent when talent doesn’t work hard. — Tim Notke",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "Don’t wait. The time will never be just right. — Napoleon Hill",
    "The future depends on what you do today. — Mahatma Gandhi",
    "We may encounter many defeats but we must not be defeated. — Maya Angelou",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "You don't have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Everything you can imagine is real. — Pablo Picasso",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. — William James",
    "The best revenge is massive success. — Frank Sinatra",
    "Success is going from failure to failure without losing your enthusiasm. — Winston Churchill",
    "Your limitation—it’s only your imagination. — Unknown",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Great things never come from comfort zones. — Unknown"
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };


  const randomQuote = getRandomQuote();

  return (
    <div className="dashboard-page">
      <DashboardNavBar />
      <div className="dashboard-content">
        <h3 className="quote-title">Today's motivational quote</h3>
        <p className="quote-text">{randomQuote}</p>
        <div className="rhombus rhombus-left"></div>
        <div className="rhombus rhombus-right"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
*/

import React from 'react';
import DashboardNavBar from './DashboardNavBar';

const DashboardPage = () => {
  const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "Do not be embarrassed by your failures, learn from them and start again. — Richard Branson",
    "If you really look closely, most overnight successes took a long time. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "It is our choices that show what we truly are, far more than our abilities. — J.K. Rowling",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
    "Dream bigger. Do bigger. — Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
    "Wake up with determination. Go to bed with satisfaction. — Unknown",
    "Do something today that your future self will thank you for. — Unknown",
    "Little things make big days. Great things take time. Be patient. — Unknown",
    "The key to success is to focus on goals, not obstacles. — Unknown",
    "Dream it. Wish it. Do it. — Unknown",
    "Success doesn’t just find you. You have to go out and get it. — Unknown",
    "The harder you work, the luckier you get. — Unknown",
    "Dream it. Believe it. Build it. — Unknown",
    "Motivation is what gets you started. Habit is what keeps you going. — Jim Ryun",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Great things never come from comfort zones. — Unknown",
    "Dream it. Believe it. Achieve it. — Unknown",
    "Wake up with determination. Go to bed with satisfaction. — Unknown",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. — Unknown",
    "Hard work beats talent when talent doesn’t work hard. — Tim Notke",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "Don’t wait. The time will never be just right. — Napoleon Hill",
    "The future depends on what you do today. — Mahatma Gandhi",
    "We may encounter many defeats but we must not be defeated. — Maya Angelou",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "You don't have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Everything you can imagine is real. — Pablo Picasso",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. — William James",
    "The best revenge is massive success. — Frank Sinatra",
    "Success is going from failure to failure without losing your enthusiasm. — Winston Churchill",
    "Your limitation—it’s only your imagination. — Unknown",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Great things never come from comfort zones. — Unknown"
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const randomQuote = getRandomQuote();
  
  // Retrieve the saved email from local storage
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div className="dashboard-page">
      <DashboardNavBar />
      <div className="dashboard-content">
        <h3 className="quote-title">Today's motivational quote</h3>
        <p className="quote-text">{randomQuote}</p>
        <div className="rhombus rhombus-left"></div>
        <div className="rhombus rhombus-right"></div>
        {userEmail && <p>Hello, {userEmail}</p>}
      </div>
    </div>
  );
};

export default DashboardPage;




