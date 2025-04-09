import React from 'react';
import './HeaderMenu.scss';

function HeaderMenu() {
  return (
    <ul className="header__menu">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#stats">Data</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  );
}

export default HeaderMenu;
