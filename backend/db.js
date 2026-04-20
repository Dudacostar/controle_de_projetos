const mysql = require("mysql2");

const db = mysql.createPool({
  host: "hwyvxn.h.filess.io",
  user: "gestao_de_projetos_strongyet",
  password: "Gestao2025",
  database: "gestao_de_projetos_strongyet",
  port: 61002,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("Erro ao conectar:", err);
  } else {
    console.log("Conectado ao banco!");
    connection.release();
  }
});

module.exports = db;
