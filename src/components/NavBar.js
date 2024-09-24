// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 shadow text-lg ">
      <ul className="flex justify-center space-x-10 ">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/About" className="text-white">About</Link>
        </li>
        <li>
          <Link to="/Project" className="text-white">Projects</Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
