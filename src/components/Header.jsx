import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between h-14 border-b-2 border-borderColor bg-oColor">
      <h3 className="pl-3">Salon</h3>
      <nav className="">
        <NavLink className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full">
          Home
        </NavLink>
        <NavLink
          to="about"
          className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full"
        >
          About Us
        </NavLink>
        <NavLink className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full">
          Gallery
        </NavLink>
        <NavLink to="contact" className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full">
          Contact Us
        </NavLink>
      </nav>
      <Link>
        <button className="capitalize mr-3 h-8 bg-blue-500 rounded-md text-white font-medium w-36">
          book appointment
        </button>
      </Link>
    </header>
  );
}

export default Header;