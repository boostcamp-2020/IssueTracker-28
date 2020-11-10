const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/', controller.createComment);
router.put('/:id', controller.updateComment);

module.exports = router;
