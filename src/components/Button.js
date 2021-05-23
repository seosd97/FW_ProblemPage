import React from 'react';

const Button = ({ text = "", onClick = null }) => {
  return (
    <div className="custom-button-container">
      <input type="button" value={text} onClick={onClick} />
    </div>
  );
};

export default Button;