const { Schema, model } = require('mongoose');

const dataAuth = new Schema({
  cardNumber: { type: String},
  datePicker: { type: String},
  cvv: { type: String},
  amount: { type: String },
});

module.exports = model('dataAuth', dataAuth);
