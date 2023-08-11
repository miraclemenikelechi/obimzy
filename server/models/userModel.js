const mongoose = require("mongoose");
// user document schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "please add your name"] },
    email: {
      type: String,
      required: [true, "please your email address"],
      unique: [true, "Email address already registered"],
    },
    password: { type: String, required: [true, "Please add user password"] },
    refreshToken: String,
  },
  { timestamps: true }
);
// const userModel =
module.exports = mongoose.model("User", userSchema);
// console.log("check this out", userModel.User);
