const router = require('express').Router();
const controller = require('./controller');
const validator = require('../../middlewares/validator');

router.get('/list', controller.getMilestones);
router.post('/', validator.createMilestone, controller.createMilestone);
router.put('/:id', controller.updateMilestone);
router.delete('/:id', controller.deleteMilestone);

module.exports = router;
