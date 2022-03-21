const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./router');

const PORT = 8000;

const url =
  'mongodb+srv://Anecko:424285@cluster0.8gyd9.mongodb.net/Cluster0?retryWrites=true&w=majority';

const app = express();

app.use(cors({ credential: true }));
app.use(express.json());
app.use('/', auth);

const start = async () => {
  try {
    await mongoose.connect(url);
    app.listen(PORT, () => console.log(`server start, ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
