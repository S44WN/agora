import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

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

//user
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  //   connect();
  console.log(`Server is running on port ${PORT}`);
});
