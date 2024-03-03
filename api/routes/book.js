const express = require("express");
const multer = require("multer");
const { readBook, uploadBook, handleDelete, handleEdit, readBookInEdit } = require("../middleware/bookController");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/book-covers/");
	},
	filename: function (req, file, cb) {
		cb(null, Math.floor(Math.random() * (999 - 100) ) + 100 + "_" + file.originalname);
	},
});

const upload = multer({ storage });
const router = express.Router();

router.get("/", readBook);
router.post("/upload", upload.single("foto"), uploadBook);
router.delete("/delete/:id", handleDelete)
router.get("/edit/:id", readBookInEdit)
router.patch("/edit/:id", handleEdit)

module.exports = router;
