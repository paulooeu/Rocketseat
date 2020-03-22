const express = require("express");
const server = express();
server.use(express.json());

const projetos = [];

function verificarIndex(res, res, next) {
  const projeto = projetos[req.body.id];
  if (!projeto) {
    return res.status(400).json({ error: "Id não encontrato!" });
  }
  req.projeto = projeto;
  return next();
}
function verificarProjeto(req, res, next) {
  if (!req.body.projeto) {
    return res.status(400).json({ error: "Nome do projeto é obrigatorio!" });
  }
  return next();
}
server.get("/projeto", (req, res) => {
  return res.json(projetos);
});

server.post("/projeto", (req, res) => {
  projetos.push(req.body);
  return res.json(projetos);
});

server.put("/projeto/:id", (req, res) => {
  const { id } = req.params;
  const { projeto } = req.body;
  projetos[id].projeto = projeto;
  return res.json(projetos);
});

server.delete("/projeto/:id", (req, res) => {
  const { id } = req.params;

  projetos.splice(id, 1);
  return res.json(projetos);
});

server.put("/projeto/:id/tarefa", (req, res) => {
  const { id } = req.params;
  const { titulo } = req.body;
  projetos[id].tarefas.push(titulo);
  return res.json(projetos);
});
server.listen(5001);
