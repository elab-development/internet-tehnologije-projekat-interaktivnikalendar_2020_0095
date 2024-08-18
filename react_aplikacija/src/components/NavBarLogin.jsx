
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navBar">
            <Link to="/login" className="navBarItem">
              <IoPersonCircleOutline /> <b>Login</b>
            </Link>
           {}

            <a className='navBarItem'><RxCalendar /><b>Calendar</b></a>
          </div>
          <Link to="/" className="navbar-link">

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

