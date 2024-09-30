import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
