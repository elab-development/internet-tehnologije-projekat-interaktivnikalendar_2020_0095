import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ovde možemo obrisati podatke o sesiji, kao što je token
    localStorage.removeItem('authToken'); // Primer, ako koristimo localStorage za autentifikaciju
    
    // Preusmeravanje na stranicu za prijavu
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
