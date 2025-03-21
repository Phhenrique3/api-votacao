// Importa o modelo de enquetes
const { polls } = require("../models/pollmodels").default;
console.log("Estado inicial de polls:", polls); // Loga o estado inicial das enquetes

// Função para criar uma nova enquete
exports.createPoll = (req, res) => {
  const { pergunta, opcoes } = req.body; // Obtém a pergunta e opções do corpo da requisição

  // Verifica se a pergunta e pelo menos duas opções foram fornecidas
  if (!pergunta || !opcoes || opcoes.length < 2) {
    return res.status(400).json({
      message: "Você deve fornecer uma pergunta e pelo menos duas opções",
    });
  }

  // Cria um novo objeto de enquete
  const newPoll = {
    id: polls.length + 1, // Define o ID da nova enquete
    pergunta,
    opcoes: opcoes.map((opcao) => ({ opcao, votos: 0 })), // Inicializa as opções com zero votos
    votos: [], // Inicializa a lista de votos vazia
  };

  polls.push(newPoll); // Adiciona a nova enquete à lista de enquetes

  res.status(201).json(newPoll); // Retorna a nova enquete criada
};

// Função para obter uma enquete pelo ID
exports.getPoll = (req, res) => {
  const pollId = parseInt(req.params.id); // Obtém o ID da enquete da URL
  console.log("polls:", polls); // Loga o estado atual das enquetes
  const poll = polls.find((p) => p.id === pollId); // Busca a enquete com o ID fornecido
  if (!poll) return res.status(404).json({ error: "Enquete não localizada" }); // Retorna erro se a enquete não for encontrada
  res.json(poll); // Retorna a enquete encontrada
};

// Função para votar em uma enquete
exports.votePoll = (req, res) => {
  const pollId = parseInt(req.params.id); // Obtém o ID da enquete da URL
  console.log("Poll ID recebido:", pollId); // Loga o ID recebido

  const poll = polls.find((p) => p.id === pollId); // Busca a enquete com o ID fornecido

  if (!poll) {
    console.log("Enquete não encontrada."); // Loga se a enquete não for encontrada
    return res.status(404).json({ error: "Enquete não localizada." }); // Retorna erro se a enquete não for encontrada
  }

  const { optionIndex, userId } = req.body; // Obtém a opção e o userId do corpo da requisição
  console.log("Voto recebido:", { optionIndex, userId }); // Loga o voto recebido

  // Verifica se o usuário já votou nesta enquete
  if (poll.votos.includes(userId)) {
    return res.status(400).json({ error: "Usuário já votou nesta enquete!" });
  }

  // Verifica se a opção é válida
  if (optionIndex < 0 || optionIndex >= poll.opcoes.length) {
    return res.status(400).json({ error: "Opção inválida." });
  }

  // Registra o voto
  poll.opcoes[optionIndex].votos += 1; // Incrementa o voto na opção escolhida
  poll.votos.push(userId); // Adiciona o ID do usuário à lista de votos para evitar múltiplos votos

  res.json({ message: "Voto registrado com sucesso!", poll }); // Retorna mensagem de sucesso e a enquete atualizada
};
