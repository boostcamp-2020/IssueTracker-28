const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getLabels);
router.post('/', controller.createLabel);
router.put('/', controller.updateLabel);
router.delete('/', controller.deleteLabel);

module.exports = router;
