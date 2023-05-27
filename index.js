const express = require('express');
require('dotenv').config();
require('./services');

const connectDB = require('./config');
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  connectDB();
});
