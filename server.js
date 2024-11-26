const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const productRoutes = require('./routes/productRoute');
const recommendRoutes = require('./routes/recommendRoute');
const uploadRoutes = require("./routes/uploadRoute");


const app = express();
const PORT = 3030;

// Static folder for uploaded images
app.use("/uploads", express.static("uploads"));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Kết nối cơ sở dữ liệu
connectDB();

// Định tuyến
app.use('/api/products', productRoutes);
app.use('/api/recommends', recommendRoutes);
app.use("/api", uploadRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
