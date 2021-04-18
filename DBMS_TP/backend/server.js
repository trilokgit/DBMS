require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');

connectDB();

require("./models/User");

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use(require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});