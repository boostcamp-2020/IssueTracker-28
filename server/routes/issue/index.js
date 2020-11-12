const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getIssues);
router.get('/detail/:id', controller.getIssueDetail);
router.post('/', controller.createIssue);
router.put('/status', controller.updateIssueStatus);
router.put('/content/:id', controller.updateIssueContent);
router.put('/title/:id', controller.updateIssueTitle);
router.put('/assignee/:id', controller.updateIssueAssignee);
router.put('/label/:id', controller.updateIssueLabel);
router.put('/milestone/:id', controller.updateIssueMilestone);
router.delete('/:id', controller.deleteIssue);

module.exports = router;
