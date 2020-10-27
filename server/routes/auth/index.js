const express = require('express');
const router = express.Router();
const passport = require('passport');

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  return res.status(301).redirect('/auth/fail');
};
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function (req, res, next) {
  console.log(req.user);
  console.log(req.isAuthenticated);
  console.log(req.isAuthenticated());
  console.log(req.login);
  res.send('성공하였습니다');
});

router.get('/fail', function (req, res, next) {
  res.send('실패하였습니다');
});

/* test page. */
router.get('/github', passport.authenticate('github'));
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/auth/fail',
    successRedirect: '/auth/success',
  })
);
module.exports = router;
