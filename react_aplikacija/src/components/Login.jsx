
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
<div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor:'white'}}>
<h2 className='login-title'>Login</h2>
<form onSubmit={handleSubmit} className='login-form'>
<div style={{ marginBottom: '10px' }} className='input-group'>
<label htmlFor="username"  className = 'input-label'>Username:</label>
<input
             className='input-field'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            required
          />
</div>
<div style={{ marginBottom: '10px' }}>
<label htmlFor="password"  className = 'input-label'>Password:</label>
<input
            className='input-field'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            required
          />
</div>
<button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
        className='submit-button'>
          Login
</button>
</form>
</div>
  );
};
 
export default Login;





