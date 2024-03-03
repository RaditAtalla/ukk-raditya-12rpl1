const express = require("express");
const { handleRegister, handleLogin, getUser, handleBan, getBannedUser } = require("../middleware/userController");
const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.post("/ban/:id", handleBan);
router.get("/", getUser);
router.get("/banned", getBannedUser);

module.exports = router;
