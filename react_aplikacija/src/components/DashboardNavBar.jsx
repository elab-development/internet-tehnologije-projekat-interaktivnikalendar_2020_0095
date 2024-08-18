import React from 'react';
import { Link } from 'react-router-dom';
import { RxCalendar } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";


const DashboardNavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/my-calendar" className="navBarItem"><RxCalendar /><b>My Calendar</b></Link>
      <Link to="/all-events" className="navBarItem"><FaListCheck  /><b>All Events</b></Link>
      <Link to="/logout" className="navBarItem"><LuLogOut /><b>Logout</b></Link>
    </nav>
  );
}

export default DashboardNavBar;
