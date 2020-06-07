const express = require('express');
const controller = require('../controllers/department');
const router = express.Router();

router.get('/', controller.getAll);
router.delete('/:id', controller.remove);
router.post('/', controller.create);
router.patch('/:id', controller.update);

module.exports = router;
