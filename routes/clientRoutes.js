const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, clientController.createClient);

module.exports = router;
