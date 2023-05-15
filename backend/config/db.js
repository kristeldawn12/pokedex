const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongDB Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectDB;
