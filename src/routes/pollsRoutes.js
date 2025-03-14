// No arquivo src/routes/pollsRoutes.js
const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollControllers');

router.post('/polls', pollController.createPoll);
router.get('/polls/:id', pollController.getPoll);
router.post('/polls/:id/vote', pollController.votePoll);

module.exports = router;
