const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getIssues);
router.get('/detail/:id', controller.getIssueDetail);
router.post('/', controller.createIssue);

module.exports = router;
