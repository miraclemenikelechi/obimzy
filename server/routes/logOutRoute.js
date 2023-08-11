const express = require("express");
const { handleLogout } = require("../controllers/logOutController");
const router = express.Router();

router.get("/", handleLogout);
module.exports = router;
