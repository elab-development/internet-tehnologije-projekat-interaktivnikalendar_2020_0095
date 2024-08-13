import React from 'react'

function NavBar() {
  return (
    <div className="navBar">
      <a className='navBarItem'>Home</a> 
      <a className='navBarItem'>Login</a>
      <a className='navBarItem'>My Calendar</a>
      <a className='navBarItem'>All events</a>
      <a className='navBarItem'>Logout</a>
    </div>
  );
}

export default NavBar
