
const auth = require('./auth');
const issue = require('./issue');
const label = require('./label');
const milestone = require('./milestone');

router.use('/auth', auth);
router.use('/issue', issue);
router.use('/label', label);
router.use('/milestone', milestone);

const express = require('express');
const passport = require('passport');

const router = express.Router();
const authRouter = require('./auth/index');
const passportJWT = passport.authenticate('jwt', { session: false });

router.use('/auth', authRouter);
/* GET home page. */

router.get('/', passportJWT, function (req, res, next) {
  res.send('auth pass');
});

module.exports = router;

