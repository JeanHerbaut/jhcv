import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/avatar.png" alt="Jean Herbaut" className="header__avatar" />
        Jean Herbaut
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#stats">Data</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
