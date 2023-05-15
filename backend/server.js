const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const { errorHandler } = require("./middleWare/errorMiddleware.js");

const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 3050;

connectDB();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/", require("./routes/pokemonRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
