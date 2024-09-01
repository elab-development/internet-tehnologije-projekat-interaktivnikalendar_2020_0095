import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdOutlinePersonAdd } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navBar">
            <Link to="/login" className="navBarItem">
              <IoPersonCircleOutline /> <b>Login</b>
            </Link>

            <Link to="/registration" className="navBarItem">
              <MdOutlinePersonAdd /> <b>Registration</b>
            </Link>

            <Link to="/calendar" className="navBarItem">
              <RxCalendar /> <b>Calendar</b>
            </Link>

            <Link to="/general-events" className="navBarItem">
              <CiBoxList /> <b>General Events</b>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
