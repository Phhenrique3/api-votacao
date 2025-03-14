const { polls } = require("../models/pollmodels.js").default;

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
    votos: [],
  };

  polls.push(newPoll);

  res.status(201).json(newPoll);
};

exports.getPoll = (req, res) => {
  const poll = polls.find((p) => p.id === parseInt(req.params.id));
  if (!poll) return res.status(404).json({ error: "Enquete não locslizada" });
  res.json(poll);
};

exports.votePoll = (req, res) => {
  const pollId = parseInt(req.params.id); // Obtém o ID da enquete da URL
  console.log("Poll ID recebido:", pollId); // Adicionando log para ver o ID recebido

  const poll = polls.find((p) => p.id === pollId); // Busca a enquete com o ID

  if (!poll) {
    console.log("Enquete não encontrada."); // Adicionando log se a enquete não for encontrada
    return res.status(404).json({ error: "Enquete não localizada." });
  }

  const { optionIndex, userId } = req.body;
  console.log("Voto recebido:", { optionIndex, userId }); // Verifica o voto recebido

  // Impede múltiplos votos
  if (poll.votes.includes(userId)) {
    return res.status(400).json({ error: "Usuário já votou nesta enquete!" });
  }

  // Verifica se a opção é válida
  if (optionIndex < 0 || optionIndex >= poll.options.length) {
    return res.status(400).json({ error: "Opção inválida." });
  }

  // Registra o voto
  poll.options[optionIndex].votes += 1;
  poll.votes.push(userId); // Guarda o id do usuário que votou para evitar múltiplos votos.

  res.json({ message: "Voto registrado com sucesso!", poll });
};
