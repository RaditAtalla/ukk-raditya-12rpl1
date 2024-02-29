const mysql = require("mysql")
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ukk-raditya-12rpl1"
})

module.exports = db