const router = require('express').Router();
const passport = require('passport');
const auth = require('./auth');
const issue = require('./issue');
const label = require('./label');
const milestone = require('./milestone');
const user = require('./user');
const upload = require('./upload');
const comment = require('./comment');

const passportJWT = passport.authenticate('jwt', { session: false });

router.use('/auth', auth);
router.use('/issue', passportJWT, issue);
router.use('/label', passportJWT, label);
router.use('/milestone', passportJWT, milestone);
router.use('/user', passportJWT, user);
router.use('/upload', upload);
router.use('/comment', passportJWT, comment);

module.exports = router;
