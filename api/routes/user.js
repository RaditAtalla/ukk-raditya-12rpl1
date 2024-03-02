const express = require("express");
const { handleRegister, handleLogin, getUser } = require("../middleware/userController");
const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.get("/", getUser);

module.exports = router;
