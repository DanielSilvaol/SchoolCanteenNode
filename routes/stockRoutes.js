const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, stockController.createStock);
router.put('/update', authMiddleware, stockController.updateStock);

module.exports = router;
