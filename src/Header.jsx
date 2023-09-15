import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-xl font-bold hover:text-gray-700">Home</Link></li>
              <li><Link to="/skills" className="text-xl font-bold hover:text-gray-700">Skills</Link></li>
              <li><Link to="/lessons" className="text-xl font-bold hover:text-gray-700">Lessons</Link></li>
              <li><Link to="/contact" className="text-xl font-bold hover:text-gray-700">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
