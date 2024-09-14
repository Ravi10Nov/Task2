const express = require('express');

const router = express.Router();

const getNote = require('../controllers/note');

router.post('/createNotes',getNote);

module.exports = router;