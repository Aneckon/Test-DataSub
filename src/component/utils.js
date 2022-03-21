import { Fetch } from "./fetch";

export const handleDatePickerChange = (date, dateString, setDatePicker) => {
  setDatePicker(dateString);
};

export const handleDateSubmit = ({cardNumber, datePicker, cvv, amount}) => {
  if (cardNumber.length && datePicker.length && cvv.length && amount.length) {
    Fetch({ cardNumber, datePicker, cvv, amount });
  } 
};