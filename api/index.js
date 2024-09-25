import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

import authRouter from "./routes/authRoute.js";

mongoose
  .connect("mongodb+srv://likeam99:kakakolo202@cluster0.f3cql.mongodb.net/")
  .then(() => console.log("Mongoosedb Connect"))
  .catch((error) => console.log("Error connecting", error));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Srerver is running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
