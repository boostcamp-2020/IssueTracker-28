const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getMilestones);
router.post('/', controller.createMilestone);
router.put('/:id', controller.updateMilestone);
router.delete('/:id', controller.deleteMilestone);

module.exports = router;
