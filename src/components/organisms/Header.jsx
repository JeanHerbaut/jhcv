import React from 'react';
import HeaderMenu from '../molecules/HeaderMenu';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__icon">
        {/* Placeholder for LinkedIn icon + text */}
        <a href="#" className="header__linkedin-link">
          <span className="header__icon-placeholder">[Icon]</span> LinkedIn
        </a>
      </div>
      <nav className="header__nav">
        <HeaderMenu />
      </nav>
    </header>
  );
}

export default Header;
