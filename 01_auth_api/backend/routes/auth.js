const express = require('express');

const { validateBody } = require('../middlewares/index');

const ctrl = require('../controllers/auth');

const router = express.Router();

router.post('/sign-up', validateBody, ctrl.register);

router.post('/sign-in', validateBody, ctrl.login);

router.post('/refresh', ctrl.refresh);

module.exports = router;
