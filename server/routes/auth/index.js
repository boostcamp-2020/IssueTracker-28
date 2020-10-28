const express = require('express');
const router = express.Router();
const controller = require('./controller');
const passport = require('passport');
require('dotenv').config();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function (req, res, next) {
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
