const express = require('express');

const router = express.Router();
const passport = require('passport');
const controller = require('./controller');
require('dotenv').config();

router.get('/github', passport.authenticate('github', { session: false }));
router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  controller.githubLogin,
  controller.githubLoginRedirect
);
module.exports = router;
