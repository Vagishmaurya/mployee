import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar">
      <div className="company-name">Mployee.me</div>
      <ul className="menu">
        <li className={activeLink === 0 ? 'active' : ''}><a href="#" onClick={() => handleClick(0)}>Resume Scan</a></li>
        <li className={activeLink === 1 ? 'active' : ''}><a href="#" onClick={() => handleClick(1)}>Resume Link</a></li>
        <li className={activeLink === 2 ? 'active' : ''}><a href="#" onClick={() => handleClick(2)}>Resume Keyword</a></li>
        <li className={activeLink === 3 ? 'active' : ''}><a href="#" onClick={() => handleClick(3)}>New Launch</a></li>
        <li className={activeLink === 4 ? 'active' : ''}><a href="#" onClick={() => handleClick(4)}>About Us</a></li>
      </ul>
      <div className="profile">
        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="Profile Avatar" />
        <span className="profile-name">Divyanshu</span>
      </div>
    </nav>
  );
}

export default Navbar;
