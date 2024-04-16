const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

// db connetion function
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //   connect();
  console.log(`Server is running on port ${PORT}`);
});
