import axios from 'axios';

import { base_url } from '../constants';

export async function Fetch({ cardNumber, datePicker, cvv, amount }) {
  await axios.post(base_url, {
    cardNumber,
    datePicker,
    cvv,
    amount,
  });
}
