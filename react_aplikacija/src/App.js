

import React from 'react';
import './App.css';
import NavBar from './components/NavBarLogin';
import slika from './images/slika.jpg';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  
  const ShowNavBar = () => {
    const location = useLocation();

    return location.pathname !== '/login' ? <NavBar /> : null;
  };

  return (
    <Router>
      <div className="App">
        <ShowNavBar />
        <Routes>
          {}
          <Route
            path="/"
            element={
              <div>
                <div className="hero-container">
                  <img src={slika} alt="Business Calendar Background" className="hero-image" />
                  <div className="hero-text">Welcome to Your Business Calendar</div>
                </div>
              </div>
            }
          />
          {}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
