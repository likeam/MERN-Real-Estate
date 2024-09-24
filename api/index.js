import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";

mongoose
  .connect("mongodb+srv://likeam99:kakakolo202@cluster0.f3cql.mongodb.net/")
  .then(() => console.log("Mongoosedb Connect"))
  .catch((error) => console.log("Error connecting", error));

const app = express();

app.listen(3000, () => {
  console.log("Srerver is running on port 3000");
});

app.use("/api/user", userRouter);
