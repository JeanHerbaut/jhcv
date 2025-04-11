import React from 'react';
import '../../styles/Footer.scss';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Let's connect !</p>
      <a
        href="https://www.linkedin.com/in/jean-herbaut"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <FaLinkedin className="linkedin-icon" />
      </a>
    </footer>
  );
}

export default Footer;
