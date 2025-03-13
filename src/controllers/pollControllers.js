const { polls } = require("../models/pollmodels.js");


// Criar uma nova enquete
exports.createPoll = (req, res) => {
  const { pergunta, opcoes } = req.body;

  if (!pergunta || !opcoes || opcoes.length < 2) {
    return res.status(400).json({
      message: "Você deve fornecer uma pergunta e pelo menos duas opções",
    });
  }

  const newPoll = {
    id: polls.length + 1,
    pergunta,
    opcoes: opcoes.map((opcao) => ({ opcao, votos: 0 })),
    votos: []
  };

  polls.push(newPoll)
  
  res.status(201).json(newPoll)


};
