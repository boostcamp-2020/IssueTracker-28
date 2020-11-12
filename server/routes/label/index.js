const router = require('express').Router();
const controller = require('./controller');
const validator = require('../../middlewares/validator');

router.get('/list', controller.getLabels);
router.post('/', validator.createLabel, controller.createLabel);
router.put('/:id', controller.updateLabel);
router.delete('/:id', controller.deleteLabel);

module.exports = router;
