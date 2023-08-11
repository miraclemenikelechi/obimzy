const express = require("express");
const {
  registerUser,
  loginUser,
  fetchUser,
} = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler");
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// this route is private
router.route("/current").get(validateToken, fetchUser);
module.exports = router;
