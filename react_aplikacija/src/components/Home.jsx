import React from 'react';
import Navbar from './NavBar'; 
import './Home.css';
 
function Home() {
  return (
<div className="homePage">
<Navbar />
<div className="homeTextOverlay">
<h1 className="homeText">Welcome to your business calendar</h1>
</div>
</div>
  );
}
 
export default Home;

 