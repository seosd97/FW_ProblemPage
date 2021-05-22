import React from 'react';

const Button = ({ text = "", onClick = null }) => {
  return (
    <input type="button" value={text} onClick={onClick} />
  );
};

export default Button;