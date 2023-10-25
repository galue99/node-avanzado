const express = require('express');
const router = express.Router();

const humberController = require('../controllers/humber');
const randomController = require('../controllers/random');

router.get('/randomNumber', randomController.randomNumber);

router.get('/aguanteHumber', humberController.aguanteHumber);


module.exports = router;
