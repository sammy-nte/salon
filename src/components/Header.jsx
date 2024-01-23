import React from "react";
import { Link, NavLink } from "react-router-dom";
import { OpenMenuSvg } from "./Svgs";

function Header({ onSvgClick }) {
  return (
    <header className="flex items-center justify-between h-14 border-b-2 border-borderColor bg-oColor">
      <h3 className="pl-3">Salon</h3>
      <nav className="hidden lg:block">
        <NavLink className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full">
          Home
        </NavLink>
        <NavLink
          to="about"
          className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full"
        >
          About Us
        </NavLink>
        <NavLink
          to="gallery"
          className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full"
        >
          Gallery
        </NavLink>
        <NavLink
          to="contact"
          className="mx-7 pb-1 relative after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[.2rem] after:bg-borderColor after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact Us
        </NavLink>
      </nav>
      <a href="https://theguyhair.as.me/" target="_blank" className="">
        <button className="h-8 rounded-md bg-borderColor w-44 capitalize mr-5 text-white font-medium hover:scale-105 transition-all">
          Book an appointment
        </button>
      </a>
      <OpenMenuSvg onClick={onSvgClick} />
    </header>
  );
}

export default Header;
