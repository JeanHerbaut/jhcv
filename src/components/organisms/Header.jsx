import React, { useState } from 'react';
import '../../styles/Header.scss';
import Switch from '../atoms/Switch';

const Header = ({ onModeChange }) => {
  const [isProMode, setIsProMode] = useState(true);

  const handleToggle = () => {
    setIsProMode(!isProMode);
    onModeChange(!isProMode ? 'pro' : 'personal');
  };

  return (
    <header className={`header ${isProMode ? 'pro-mode' : 'personal-mode'}`}>
      <div className="header-content">
        <h1>{isProMode ? 'Moi, professionnel' : 'Moi, personnel'}</h1>
        <div className="switch-container">
          <Switch isChecked={!isProMode} onChange={handleToggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
