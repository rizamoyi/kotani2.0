const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DATABASE_URL;

async function connectDB() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('err', error);
  }
}

module.exports = connectDB;
