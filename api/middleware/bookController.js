const db = require("./database");

function uploadBook(req, res) {
	const title = req.body.judul;
	const author = req.body.penulis;
	const publisher = req.body.penerbit;
	const releaseYear = req.body.tahunTerbit;
	const pageCount = req.body.jumlahHalaman;
	const category = req.body.kategori;
	const language = req.body.bahasa;
	const location = req.body.lokasi;
	const description = req.body.deskripsi;

	db.query(`INSERT INTO buku VALUES("", "${title}", "${author}", "${publisher}", "${releaseYear}", "", "${language}", "${pageCount}", "${description}", CURDATE())`, (error) => {
		if (error) throw error;
		res.send({ uploaded: true });
	});
}

function readBook(req, res) {
	db.query("SELECT * FROM buku", (error, books) => {
		if (error) throw error;
		res.send({ books });
	});
}

module.exports = { uploadBook, readBook };
