const express = require("express");
const { readBook, uploadBook } = require("../middleware/bookController");
const router = express.Router();

router.get("/", readBook);
router.post("/upload", uploadBook);

module.exports = router;
