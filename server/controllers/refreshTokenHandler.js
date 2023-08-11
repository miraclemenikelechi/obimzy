const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// refresh API
const handleRefreshToken = expressAsyncHandler(async (req, res) => {
  console.log(req.cookies);
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  const userAvaible = await User.findOne({ refreshToken });
  if (!userAvaible) return res.sendStatus(403); //Forbidden

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || userAvaible.username !== decoded.user.username)
      return res.sendStatus(403);

    const accessToken = jwt.sign(
      { user: decoded.user },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5m",
      }
    );
    res.status(200).json({ accessToken });
  });
});

module.exports = { handleRefreshToken };
