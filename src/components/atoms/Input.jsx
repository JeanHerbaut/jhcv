import React from 'react';
import './Input.scss';

function Input({ type = 'text', placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
    />
  );
}

export default Input;
