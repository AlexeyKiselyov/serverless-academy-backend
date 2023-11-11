const ctrl = require('../controllers/country');

const express = require('express');
const router = express.Router();

router.post('/', ctrl.getCountry);

module.exports = router;
