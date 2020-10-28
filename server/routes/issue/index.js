const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getIssues);

module.exports = router;
