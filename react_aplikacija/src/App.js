/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import HomePage from './components/HomePage';
import MyCalendar from './components/MyCalendar';
import AllEvents from './components/AllEvents';
import Logout from './components/Logout';
import CalendarPage from './components/Calendar'; 
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/my-calendar" element={<MyCalendar />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/calendar" element={<CalendarPage />} /> 
          <Route path="/registration" element={<Registration />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import HomePage from './components/HomePage';
import MyCalendar from './components/MyCalendar';
import AllEvents from './components/AllEvents';
import Logout from './components/Logout';
import CalendarPage from './components/Calendar'; 
import './App.css';
import Registration from './components/Registration';

function App() {
  const [userRole, setUserRole] = useState(''); // State to store the user's role

  const fetchUserRole = async () => {
    try {
      // Assuming you have an endpoint that returns the user role
      const response = await axios.get('http://127.0.0.1:8000/api/user-role');
      setUserRole(response.data.role); // Assuming response.data.role is 'Admin', 'Manager', or 'User'
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  useEffect(() => {
    // Fetch the user role when the component mounts
    fetchUserRole();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage userRole={userRole} />} /> {/* Pass userRole to DashboardPage */}
          <Route path="/my-calendar" element={<MyCalendar />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/calendar" element={<CalendarPage />} /> 
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




