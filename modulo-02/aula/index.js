const express = require("express");
const server = express();

const usuario = ["paulo"];

function verificarUsuario(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ error: "Nome do usuario é obrigatorio!" });
  }
  return next();
}
function verificarIndex(req, res, next) {
  const usuarioInstance = usuario[req.body.index];
  if (!usuarioInstance) {
    return res.status(400).json({ error: "Posição do array nao existe." });
  }
  req.usuario = usuarioInstance;
  return next();
}
server.get("/usuario", (req, res) => {
  return res.json(usuario);
});

server.get("/usuario/:index", verificarIndex, (req, res) => {
  return res.json(req.usuario);
});
server.post("/usuario", verificarUsuario, (req, res) => {
  const { nome } = req.body;
  usuario.push(nome);
  return res.json(usuario);
});
server.put("/usuario/:index", verificarIndex, verificarUsuario, (req, res) => {
  const { index } = req.params;
  const { nome } = req.body;
  usuario[index] = nome;
  return res.json(usuario);
});
server.delete("/usuario/:index", verificarIndex, (req, res) => {
  const { index } = req.params;

  usuario.splice(index, 1);
  return res.send();
});

server.listen(3000);
