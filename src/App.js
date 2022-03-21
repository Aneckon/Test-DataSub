import React, { useState, useEffect } from 'react';

import { FormBtn, Input } from './component';

import { handleDatePickerChange, handleDateSubmit } from './component/utils';
import { mask } from './component/constants';

import { Form, DatePicker, Col, Row } from 'antd';

export const App = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [datePicker, setDatePicker] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (cardNumber.length && datePicker.length && cvv.length && amount.length) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [cardNumber, datePicker, cvv, amount]);

  return (
    <div className="app">
      <Form>
        <Input
          setInputChange={setCardNumber}
          inputValue={cardNumber}
          placeholder="Card Number"
          mask={mask}
        />

        <Row style={{ justifyContent: 'space-between' }}>
          <Col span={15}>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date, dateString) =>
                handleDatePickerChange(date, dateString, setDatePicker)
              }
            />
          </Col>
          <Col span={4}>
            <Input setInputChange={setCvv} inputValue={cvv} placeholder="Cvv" mask="999" />
          </Col>
        </Row>

        <Input setInputChange={setAmount} inputValue={amount} placeholder="Amount" />

        <FormBtn
          buttonActive={buttonActive}
          handleDateSubmit={() => handleDateSubmit({ cardNumber, datePicker, cvv, amount })}
        />
      </Form>
    </div>
  );
};
