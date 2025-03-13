const express = require('express');
const router = express.Router();

const pullControllers = require('../controllers/pollControllers');

router.post('/polls', pullControllers.createPoll);

module.exports = router;