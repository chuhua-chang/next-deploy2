"use client";

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className='navbar'>
      <div className="navbar-left">
      Chu Hua Chang
  </div>
  <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
    </div>
  <div className={`navbar-center ${isOpen ? 'active' : ''}`}>
    <ul className="nav-links">
        <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/researchInterest">Research Interests</a>
      </li>
      <li>
        <a href="/researchExperience">Research Experience</a>
      </li>
      <li>
        <a href="/publications">Publications</a>
      </li>
      <li>
        <a href="/photos">Photos</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
);
};


export default Navbar;