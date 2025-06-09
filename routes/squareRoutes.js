const express = require('express');
const { getLoans } = require('../controllers/squareController');
const router = express.Router();

router.get('/loans', getLoans);

module.exports = router;