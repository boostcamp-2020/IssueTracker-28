const express = require('express');
const router = express.Router();
const controller = require('./controller');
const passport = require('passport');
require('dotenv').config();

/* Github Login page. */
router.get('/github', passport.authenticate('github', { session: false }));
router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  controller.githubLogin,
  controller.githubLoginRedirect
);
module.exports = router;
