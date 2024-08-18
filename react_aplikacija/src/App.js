

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBarLogin'; 
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import HomePage from './components/HomePage'; 
import MyCalendar from './components/MyCalendar';
import AllEvents from './components/AllEvents';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {}
          <Route path="/" element={<HomePage />} />
          
          {}
          <Route path="/login" element={<LoginPage />} />
          
          {}
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {}
          <Route path="/my-calendar" element={<MyCalendar />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/logout" element={<Logout />} />
          
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

