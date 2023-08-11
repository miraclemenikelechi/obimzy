const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// logout API
const handleLogout = expressAsyncHandler(async (req, res) => {
  // On client, also delete the accessToken
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //successful but no content

  const refreshToken = cookies.jwt;
  const userAvaible = await User.findOne({ refreshToken });
  if (!userAvaible) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204); //successful but no content
  }

  //delete refreshToken fro database
  const currentuser = await User.updateOne(
    { email: userAvaible.email }, // Search criteria
    { $unset: { refreshToken: "" } } // remove field from database
  );
  // console.log(currentuser);
  res.sendStatus(204); //successful but no content
});

module.exports = { handleLogout };
