const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://localhost:27017/foodDB', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('database ngon');
  } catch (err) {
      console.error('database lỏ:', err.message);
      process.exit(1); 
  }
};

module.exports = connectDB;
