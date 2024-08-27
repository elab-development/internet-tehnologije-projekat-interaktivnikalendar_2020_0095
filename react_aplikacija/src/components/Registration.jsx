import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const isHomePage = window.location.pathname === '/register';

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationData = {
      name,
      surname,
      email,
      password,
      role,
    };
    //Ovde kucamo logiku za registraciju
    axios.post("http://127.0.0.1:8000/api/register", registrationData)
    .then(response => {
      console.log(response.data);
      navigate('/login');
    }) 
    .catch(error => {
      console.log(error.response.data); // This will show validation errors from the backend
    });
    /*navigate('/login');*/

  };

  return (
    <div className="registration-page">
      <div className="registration-form">
        <h2 className="registration-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Surname:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
          {isHomePage ? (
                <label>
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Admin">Manager</option>
                    </select>
                </label>
            ) : (
                <label>
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    </select>
                </label>
            )}
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;


