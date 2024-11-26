const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://localhost:27017/foodDB', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
  } catch (err) {
      console.error('Could not connect to MongoDB:', err.message);
      process.exit(1); // Dừng ứng dụng nếu không thể kết nối
  }
};

module.exports = connectDB;
