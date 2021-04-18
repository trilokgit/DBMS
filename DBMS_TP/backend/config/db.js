require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("mongoDB connection SUCCESS");
    } catch (error) {
        console.log("mongodb connection FAIL");
        process.exit(1);
    }
}

module.exports = connectDB;
