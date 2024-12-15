import React from 'react';
import NavBar from '../components/NavBarLogin'; 
import slika from '../images/slika.jpg'; 
 
const HomePage = () => {
  return (
<div>
<NavBar />
<div className="hero-container">
<img src={slika} alt="Business Calendar Background" className="hero-image" />
<div className="hero-text">Welcome to Your Business Calendar</div>
</div>
</div>
  );
};
 
export default HomePage;