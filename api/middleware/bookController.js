const db = require("./database");
const path = require("path");

function uploadBook(req, res) {
	const title = req.body.judul;
	const cover = req.file;
	const author = req.body.penulis;
	const publisher = req.body.penerbit;
	const releaseYear = req.body.tahunTerbit;
	const pageCount = req.body.jumlahHalaman;
	const category = req.body.kategori;
	const language = req.body.bahasa;
	const location = req.body.lokasi;
	const description = req.body.deskripsi;

	db.query(
		`INSERT INTO buku VALUES("", "${title}", "${author}", "${publisher}", "${releaseYear}", "${path.parse(cover.filename).name}", "${language}", "${pageCount}", "${description}", CURDATE())`,
		(error) => {
			res.send({ uploaded: true });
		}
	);
}

function readBook(req, res) {
	db.query("SELECT * FROM buku", (error, books) => {
		if (error) throw error;
		res.send({ books });
	});
}

module.exports = { uploadBook, readBook };
