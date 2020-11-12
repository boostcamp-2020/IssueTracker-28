const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/:issueId', controller.getComments);
router.post('/', controller.createComment);
router.put('/:id', controller.updateComment);
router.delete('/:id', controller.deleteComment);

module.exports = router;
