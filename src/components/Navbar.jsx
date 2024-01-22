import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">Utkarsh Singh👋</Link>
      <ul className="flex items-center space-x-6">
        <li>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
