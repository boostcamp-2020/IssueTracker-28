const router = require('express').Router();
const passport = require('passport');
const auth = require('./auth');
const issue = require('./issue');
const label = require('./label');
const milestone = require('./milestone');
const passportJWT = passport.authenticate('jwt', { session: false });

router.use('/auth', auth);
router.use('/issue', issue);
router.use('/label', label);
router.use('/milestone', milestone);
router.get('/', passportJWT, function(req, res, next) {
    res.send('auth pass');
});
module.exports = router;
