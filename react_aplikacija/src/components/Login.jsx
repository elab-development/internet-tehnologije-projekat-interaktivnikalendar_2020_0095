/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", loginData);

      // Save the user's email to local storage
      localStorage.setItem('userEmail', email);

      // Redirect to the dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div style={{ marginBottom: '10px' }} className='input-group'>
          <label htmlFor="email" className='input-label'>Email:</label>
          <input
            className='input-field'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password" className='input-label'>Password:</label>
          <input
            className='input-field'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} className='submit-button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", loginData);
      
      // Store token in local storage
      localStorage.setItem('token', response.data.token);

      // Store user's email in local storage
      localStorage.setItem('userEmail', email);

      // Redirect to the dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div style={{ marginBottom: '10px' }} className='input-group'>
          <label htmlFor="email" className='input-label'>Email:</label>
          <input
            className='input-field'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password" className='input-label'>Password:</label>
          <input
            className='input-field'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} className='submit-button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;







