const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getLabels);
router.post('/', controller.createLabel);
router.put('/:id', controller.updateLabel);
router.delete('/:id', controller.deleteLabel);

module.exports = router;