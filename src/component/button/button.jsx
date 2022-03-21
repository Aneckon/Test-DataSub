import React from 'react';

import { Button } from 'antd';

export const FormBtn = ({ handleDateSubmit, buttonActive }) => {
  return (
    <Button onClick={handleDateSubmit} disabled={!buttonActive}>
      оплатить
    </Button>
  );
};
