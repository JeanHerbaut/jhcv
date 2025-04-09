import React from 'react';
import HeaderMenu from '../molecules/HeaderMenu';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/avatar.png" alt="Jean Herbaut" className="header__avatar" />
        Jean Herbaut
      </div>
      <nav className="header__nav">
        <HeaderMenu />
      </nav>
    </header>
  );
}

export default Header;
