const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
require('./services');

const connectDB = require('./config');
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  connectDB();
});
