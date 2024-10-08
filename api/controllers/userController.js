import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import Listing from "../models/listingModel.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
  res.send("Test Route");
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.prams.id)
    return next(errorHandler(401, "You are not allowed to update this user"));
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(401, "You are not allowed to delete this user");
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(204).jsonj("User has been Deleted");
  } catch (error) {
    next(error);
  }
};

export const getUserListing = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(401, "You are not allowed to view this user's listings");
  }
};
