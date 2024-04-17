import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
// import gigRoute from "./routes/gig.route.js";
// import orderRoute from "./routes/order.route.js";
// import conversationRoute from "./routes/conversation.route.js";
// import messageRoute from "./routes/message.route.js";
// import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

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
app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// app.use("/api/gigs", gigRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/reviews", reviewRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
