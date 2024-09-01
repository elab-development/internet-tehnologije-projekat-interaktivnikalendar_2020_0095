import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Remove token from local storage
        localStorage.removeItem('token'); // Assuming the token is stored under 'token'

        // Notify the user
        alert('Successfully logged out');

        // Redirect to the login page
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
