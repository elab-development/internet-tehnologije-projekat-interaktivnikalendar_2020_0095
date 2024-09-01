import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin'); // Default to Admin
  const location = useLocation();

  useEffect(() => {
    console.log('Current path:', location.pathname); // Debugging line

    // Determine role based on the current URL
    if (location.pathname === '/dashboard/registration') {
      setRole('Manager');
    } 
    if (location.pathname === '/') {
      setRole('Admin');
    } 
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registrationData = {
        name,
        surname,
        email,
        password,
        role,
      };

      await axios.post('http://localhost:8000/api/register', registrationData);
      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user');
    }
  };

  return (
    <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={location.pathname === '/dashboard/registration'}
          >
            {location.pathname === '/dashboard/registration' ? (
              <option value="Manager">Manager</option>
            ) : (
              <>
                <option value="Admin">Admin</option>
              </>
            )}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
