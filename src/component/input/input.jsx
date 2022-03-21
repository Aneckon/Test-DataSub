import React from 'react';

import InputMask from 'react-input-mask';

export const Input = ({ mask, placeholder, setInputChange, inputValue }) => {
  return (
    <InputMask
      className="ant-input"
      mask={mask}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputChange(e.target.value)}
    />
  );
};
