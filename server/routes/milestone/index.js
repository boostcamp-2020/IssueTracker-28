const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getMilestones);
router.post('/', controller.createMilestone);
router.put('/', controller.updateMilestone);
router.delete('/', controller.deleteMilestone);

module.exports = router;
