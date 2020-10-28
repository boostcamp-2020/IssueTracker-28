const express = require('express');
const passport = require('passport');

const router = express.Router();
const authRouter = require('./auth/index');
const passportJWT = passport.authenticate('jwt', { session: false });

router.use('/auth', authRouter);
/* GET home page. */
router.get('/', passportJWT, function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
