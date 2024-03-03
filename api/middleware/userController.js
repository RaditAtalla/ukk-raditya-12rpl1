const db = require("./database");
const validator = require("validator");
const bcrypt = require("bcrypt");

function handleRegister(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	const name = req.body.nama;
	const email = req.body.email;
	const address = req.body.email;

	if (!validator.isEmail(email)) {
		console.log("email salah!");
		return;
	}

	bcrypt.hash(password, 10, (error, hashPassword) => {
		if (error) throw error;

		db.query(`INSERT INTO user VALUES("", "${username}", "${hashPassword}", "${email}", "${name}", "${address}", "peminjam", "", "aktif", now())`, (error, result) => {
			if (error) throw error;
			console.log(result);
			res.send({ registered: true });
		});
	});
}

function handleLogin(req, res) {
	const username = req.body.username;
	const password = req.body.password;

	db.query(`SELECT * FROM user WHERE username = '${username}'`, (error, data) => {
		if (error) throw error;

		if (data[0] == null) {
			res.send({ hasUsername: false, isPasswordCorrect: false, isAdmin: false });
			return;
		}

		bcrypt.compare(password, data[0].Password, (error, result) => {
			if (error) throw error;

			if (result == false) {
				res.send({ hasUsername: true, isPasswordCorrect: false, isAdmin: false });
				return;
			}

			if (data[0].Akses == "petugas") {
				res.send({ hasUsername: true, isPasswordCorrect: true, isAdmin: true });
				return;
			}

			res.send({ hasUsername: true, isPasswordCorrect: true, isAdmin: false });
		});
	});
}

function getUser(req, res) {
	db.query('SELECT * FROM user WHERE Akses = "peminjam" AND status = "aktif"', (error, users) => {
		if (error) throw error;
		res.send({ users });
	});
}

function handleBan(req, res) {
	const userId = req.params.id;
	const alasan = req.body.alasanBan;

	db.query(`UPDATE user SET status = "ban" WHERE UserID = ${userId}`, (error, result) => {
		if (error) throw error;
	});

	db.query(`INSERT INTO alasanban VALUES("", "${userId}", "${alasan}")`, error => {
		if (error) throw error
	});
}

module.exports = { handleLogin, handleRegister, getUser, handleBan };
