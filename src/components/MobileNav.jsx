import  { useState } from "react";
import { Link } from "react-router-dom";
import { CloseSvg } from "./Svgs";

export default function MobileNav({ onClick, openMenu, closeMenu }) {
  return (
    <section
      className={`${closeMenu
        ? "close-menu"
        : openMenu ? "open-menu" : ""} mobile-menu`}
    >
      <nav className="w-[300px] h-[300px] shadow-[5px_5px_9px_#c9c1d3,-5px_-5px_9px_#f1e7fd] flex flex-col justify-evenly items-center rounded-[36px] bg-borderColor">
        <CloseSvg
          onClick={() => {
            onClick();
          }}
          color="white"
        />
        <Link className="mobile-menu-nav-links" onClick={()=> onClick()}  to="/">
          Home
        </Link>
        <Link className="mobile-menu-nav-links" onClick={()=> onClick()} to="about">
          About Us
        </Link>
        <Link className="mobile-menu-nav-links" onClick={()=> onClick()} to="gallery">
          Gallery
        </Link>
        <Link className="mobile-menu-nav-links" onClick={()=> onClick()} to="contact">
          Contact Us
        </Link>
        <a href="https://theguyhair.as.me/" target="_blank" className="mobile-menu-nav-links" onClick={()=> onClick()} to="/contact">
          <button className="mobile-apply-btn">Book appointment</button>
        </a>
      </nav>
    </section>
  );
}
