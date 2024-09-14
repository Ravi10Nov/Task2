const express = require('express');

const router = express.Router();

const deleteMessage = require('../controllers/deleteMessage');

router.delete('/deleteNotes',deleteMessage);

module.exports = router;