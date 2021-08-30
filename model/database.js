require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: "teatah97",
  database: DB_NAME || "kirim",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists requests; CREATE TABLE requests(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(400) null, address VARCHAR(1000) null, hp VARCHAR(200) null, servicetype VARCHAR(400) null, timeslot time not null, dateslot date not null PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `requests` was successful!");

    console.log("Closing...");
  });

  con.end();
});
