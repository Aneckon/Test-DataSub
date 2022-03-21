import { Fetch } from "./fetch";

export const handleDatePickerChange = (date, dateString, setDatePicker) => {
  setDatePicker(dateString);
};

export const handleDateSubmit = ({cardNumber, datePicker, cvv, amount}) => {
  Fetch({ cardNumber, datePicker, cvv, amount });
};