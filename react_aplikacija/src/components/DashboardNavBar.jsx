import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CiBoxList } from "react-icons/ci";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

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
    <nav className="navbar-d">
      <div className="navbar-container-d">
        <div className="navbar-links-d">
          <div className="navBar-d">
          <Link to="/my-calendar" className="navBarItem-d" ><FaCalendarAlt />
          <span style={{ fontWeight: 'bold' }}> My Calendar</span></Link>

      <Link to="/all-events" className="navBarItem-d"><CiBoxList />
      <span style={{ fontWeight: 'bold' }}> All Events</span></Link>

      {userRole === 'Admin' && (
        <Link to="/dashboard/registration" className="navBarItem-d"><FiUserPlus />
        <span style={{ fontWeight: 'bold' }}> User Registration</span></Link>
      )}
      <Link to="/logout" className="navBarItem-d"><RiLogoutBoxRLine />
      <span style={{ fontWeight: 'bold' }}> Logout</span></Link>

          </div>
      
      </div>
      </div>
    </nav>
  );
};

export default DashboardNavBar;





