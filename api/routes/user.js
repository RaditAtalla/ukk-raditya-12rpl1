const express = require("express")
const { handleRegister, handleLogin, getUser } = require("../middleware/userController")
const router = express.Router()

router.get("/", (req, res) => {
  console.log("all good user")
  res.send("all good user")
})

router.post("/login", handleLogin)
router.post("/register", handleRegister)
router.get("/get", getUser)

module.exports = router