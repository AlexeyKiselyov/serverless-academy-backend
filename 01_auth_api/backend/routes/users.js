const { authenticate } = require('../middlewares');

const ctrl = require('../controllers/users');

const express = require('express');
const router = express.Router();

router.get('/', authenticate, ctrl.getUser);

module.exports = router;
