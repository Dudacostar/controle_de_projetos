const express = require("express");
const cors = require("cors");
const db = require("./db");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://controle-de-projetos-nine.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.post("/register", async (req, res) => {
  const { nome, login, senha } = req.body;

  db.query(
    "SELECT * FROM tbUsuarios WHERE login = ?",
    [login],
    async (err, result) => {

      if (result.length > 0) {
        return res.json({ message: "Usuário já existe" });
      }

      const senhaHash = await bcrypt.hash(senha, 10);

      db.query(
        "INSERT INTO tbUsuarios (nome, login, senha) VALUES (?, ?, ?)",
        [nome, login, senhaHash],
        (err) => {
          if (err) {
            console.log("ERRO NO BANCO:", err);

            if (err.code === "ER_LOCK_WAIT_TIMEOUT") {
              return res.json({ message: "Banco ocupado, tenta novamente" });
            }

          return res.json({ message: "Erro ao cadastrar" });
          }

          res.json({ message: "Usuário cadastrado" });
        }
      );
    }
  );
});

app.post("/login", (req, res) => {
  const { login, senha } = req.body;

  db.query(
    "SELECT * FROM tbUsuarios WHERE login = ?",
    [login],
    async (err, result) => {

      if (result.length === 0) {
        return res.json({ message: "Usuário não existe" });
      }

      const usuario = result[0];

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.json({ message: "Senha incorreta" });
      }

      res.json({
        message: "Login OK",
        usuario: {
          id: usuario.usuario_id,
          nome: usuario.nome
        }
      });
    }
  );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
