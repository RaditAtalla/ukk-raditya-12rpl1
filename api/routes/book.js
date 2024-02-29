const express = require("express")
const { readBook, uploadBook } = require("../middleware/bookController")
const router = express.Router()

router.get("/", uploadBook)
router.post("/upload", readBook)

module.exports = router