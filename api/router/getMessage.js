const express = require('express');

const router = express.Router();

const messages = require('../controllers/messages');

router.get('/getMessage',messages)

module.exports = router;