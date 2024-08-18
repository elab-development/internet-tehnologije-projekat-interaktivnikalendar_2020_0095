import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="navBar">
      <a className="navBarItem"><IoPersonCircleOutline /> <b>Login</b></a>
      <a className='navBarItem'><RxCalendar /><b>My Calendar</b></a>
      <a className='navBarItem'><FaListCheck /><b>All events</b></a>
      <a className='navBarItem'><LuLogOut /><b>Logout</b></a>
    </div>
  );
}

export default NavBar
