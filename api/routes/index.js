const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  console.log("all good")
  res.send("all good")
})

module.exports = router