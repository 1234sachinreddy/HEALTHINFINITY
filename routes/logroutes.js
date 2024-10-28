const express = require('express');
const { createLog, getLogs, softDeleteLog } = require('../controllers/logController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth.verifyToken, createLog);
router.get('/', auth.verifyToken, auth.authorizeRoles('admin', 'user'), getLogs);
router.put('/:id/soft-delete', auth.verifyToken, auth.authorizeRoles('admin'), softDeleteLog);

module.exports = router;
