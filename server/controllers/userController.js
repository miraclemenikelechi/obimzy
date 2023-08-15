const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Joi = require("joi");
const registerUser = asyncHandler(async (req, res) => {
  // used for validating inputs before processing
  // const schema = Joi.object({
  //   username: Joi.string().min(3).required(),
  //   email: Joi.string().email({
  //     minDomainSegments: 2,
  //     tlds: { allow: ["com", "net"] },
  //   }),
  //   password: Joi.string(),
  // });
  // const value = schema.validate(req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Fill all fields");
  }
  const userAvaible = await User.findOne({ email });
  if (userAvaible) {
    res.status(400);
    throw new Error("User already registered");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  // console.log("user created", newUser);
  if (newUser) {
    res.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    res.status(400);
    throw Error("User data is not valid");
  }
  res.json({ message: "Resgistered the user!" });
});
// LOGIN API
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Fill all fields");
  }
  const userAvaible = await User.findOne({ email });
  // Compare password with hashed password
  if (userAvaible && (await bcrypt.compare(password, userAvaible.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: userAvaible.username,
          email: userAvaible.email,
          id: userAvaible.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5m" }
    );
    const refreshToken = jwt.sign(
      {
        user: {
          username: userAvaible.username,
          email: userAvaible.email,
          id: userAvaible.id,
        },
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // console.log("Loging cred", refreshToken, email);
    // save the user with the refresh access token to the database
    const currentuser = await User.updateOne(
      { email }, // Search criteria
      { refreshToken: refreshToken }, // Update field
      { new: true } // Return an object about action performed
    );

    // An HTTP-only cookie can't be accessed or modified by JavaScript, which adds a layer
    // of security against certain types of cross-site scripting (XSS) attacks.
    // It provides the advantage of automatic token inclusion with each subsequent HTTP
    // request made to the server, since cookies are sent automatically by the browser.
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password not valid");
  }
});

const fetchUser = asyncHandler(async (req, res) => {
  // this is just for testing, will connect the db later
  res.json({
    name: "Chidimma",
    Age: "20+",
    level: "Graduate",
    Faculty: "Law",
    Department: "Law",
  });
});
module.exports = { registerUser, loginUser, fetchUser };
