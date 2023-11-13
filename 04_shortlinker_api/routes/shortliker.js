const ctrl = require('../controllers/shortliker');

const express = require('express');
const router = express.Router();

router.post('/', ctrl.createShortLink);

router.get('/:shortlink', ctrl.getShortLink);

module.exports = router;
