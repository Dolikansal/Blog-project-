const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/authcontroller');

router.post('/register', registerUser);

module.exports = router;