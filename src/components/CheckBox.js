import React from 'react';

const CheckBox = ({ id="", text = "", onClick = null }) => {
  return (
    <div className="custom-checkbox-container">
      <input id={`checkbox_${id}`} type="checkbox" onClick={onClick} />
      <label htmlFor={`checkbox_${id}`}>{text}</label>
    </div>
  );
};

export default CheckBox;