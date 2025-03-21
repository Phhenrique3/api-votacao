// No arquivo src/routes/pollsRoutes.js
const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollControllers');

router.post('/polls', pollController.createPoll); // url = http://localhost:3000/polls
router.get('/polls/:id', pollController.getPoll); // url = http://localhost:3000/polls/1
router.post('/polls/:id/votos', pollController.votePoll); // url = http://localhost:3000/polls/1/votos
router.get('/polls/:id/resultados', pollController.getPollResults); // url = http://localhost:3000/polls/1/resultados


module.exports = router;
