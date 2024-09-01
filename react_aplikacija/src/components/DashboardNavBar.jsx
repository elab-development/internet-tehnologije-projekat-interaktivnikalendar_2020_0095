import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardNavBar = () => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        const response = await axios.post('http://localhost:8000/api/users/by-email', 
          { email }, 
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );

        setUserRole(response.data.role); // Assuming response.data.role contains the role of the user
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <nav className="dashboard-navbar">
      <Link to="/my-calendar">My Calendar</Link>
      <Link to="/all-events">All Events</Link>
      {userRole === 'Admin' && (
        <Link to="/dashboard/registration">User Registration</Link>
      )}
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default DashboardNavBar;





