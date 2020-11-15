const express = require('express');

const pr09Controller = require('../controllers/pr09');

const router = express.Router();

router.get('/', pr09Controller.getPoke);

router.get('/prev', pr09Controller.prevPoke);

router.get('/next', pr09Controller.nextPoke);

module.exports = router;
