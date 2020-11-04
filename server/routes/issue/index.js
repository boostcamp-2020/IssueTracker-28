const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getIssues);
router.post('/', controller.createIssue);

module.exports = router;
