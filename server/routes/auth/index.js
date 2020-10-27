const express = require('express');
const router = express.Router();
const controller = require('./controller');
const passport = require('passport');
require('dotenv').config();

// session 방식을 통한 유저인증
// const isAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     next();
//   }
//   return res.status(301).redirect('/auth/fail');
// };

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function (req, res, next) {
  // Test
  // console.log(req.user);
  // console.log(req.isAuthenticated);
  // console.log(req.isAuthenticated());
  // console.log(req.login);
  res.send('성공하였습니다');
});

router.get('/fail', function (req, res, next) {
  res.send('실패하였습니다');
});

/* test page. */
router.get('/github', passport.authenticate('github', { session: false }));
router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  controller.githubLogin,
  controller.githubLoginRedirect
);
module.exports = router;
