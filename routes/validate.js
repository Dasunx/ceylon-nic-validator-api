const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const ValidatorController = require('../controllers/validator-controller');

router.get('/:nic', ValidatorController.validateNic);

module.exports = router;
