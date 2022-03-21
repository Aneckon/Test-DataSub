const { Router } = require('express');
const router = new Router();
const authController = require('../authController');

router.post('/auth', authController.auth);

module.exports = router;
