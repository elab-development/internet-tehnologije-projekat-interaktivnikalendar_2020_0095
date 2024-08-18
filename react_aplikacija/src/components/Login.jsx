import React, { useState } from 'react';
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };
 
  return (
<div className="login-form">
<h2 className="login-title">Login</h2>
<form onSubmit={handleSubmit}>
<div className="input-group">
<label htmlFor="username" className="input-label">Username:</label>
<input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />
</div>
<div className="input-group">
<label htmlFor="password" className="input-label">Password:</label>
<input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
</div>
<button type="submit" className="submit-button">
          Login
</button>
</form>
</div>
  );
};
 
export default Login;
