const ctrl = require('../controllers/storage');

const express = require('express');
const router = express.Router();

router.post('/:folder/:filename', ctrl.saveData);

router.get('/:folder/:filename', ctrl.getData);

module.exports = router;
