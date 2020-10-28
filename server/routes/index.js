const router = require('express').Router();
const auth = require('./auth');
const issue = require('./issue');
const label = require('./label');
const milestone = require('./milestone');

router.use('/auth', auth);
router.use('/issue', issue);
router.use('/label', label);
router.use('/milestone', milestone);

module.exports = router;
