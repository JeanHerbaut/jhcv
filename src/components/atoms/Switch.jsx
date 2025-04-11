import React from 'react';
import '../../styles/switch.scss';

const Switch = ({ isChecked, onChange }) => {
  return (
    <div id="app-cover">
          <div className="button r" id="button-5">
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={onChange}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
    </div>
  );
};

export default Switch;
