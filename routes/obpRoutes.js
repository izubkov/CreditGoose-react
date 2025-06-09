const express = require('express');
const { getAccounts } = require('../controllers/obpController');
const router = express.Router();

router.get('/accounts', getAccounts);

module.exports = router;