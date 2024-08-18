

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate('/dashboard');
  };
 
  return (
<div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: '10px' }}>
<label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
<input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
</div>
<div style={{ marginBottom: '10px' }}>
<label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
<input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
</div>
<button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#5da8a0', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Login
</button>
</form>
</div>
  );
};
 
export default Login;

