const express = require("express")
const { handleRegister, handleLogin } = require("../middleware/userController")
const router = express.Router()

router.get("/", (req, res) => {
  console.log("all good user")
  res.send("all good user")
})

router.post("/login", handleLogin)
router.post("/register", handleRegister)

module.exports = router