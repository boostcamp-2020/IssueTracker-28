const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getIssues);
router.get('/detail/:id', controller.getIssueDetail);
router.post('/', controller.createIssue);
router.put('/status', controller.updateIssueStatus);
router.put('/content', controller.updateIssueContent);
router.put('/title/:id', controller.updateIssueTitle);

module.exports = router;
