const express = require('express');

const router = express.Router();
const passport = require('passport');
const CLIENT_HOME_PAGE_URL = 'http://localhost:8080';

require('dotenv').config();
router.get('/success', (req, res) => {
    console.log(req.user);
    res.cookie('user', req.user.userId, {
        maxAge: 1000 * 60 * 60 * 24 * 1,
        httpOnly: false,
    });
    req.session.logined = true;
    req.session.save(() => {
        res.send('<script>window.location.href = "http://127.0.0.1:8080";</script>');
    });
});
router.get('/test', (req, res) => {
    console.log(req.isAuthenticated());
    console.log(req.user);
    console.log(req.session);
    res.send({ isLogin: req.session, user: req.user });
});
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect(CLIENT_HOME_PAGE_URL);
    });
});
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get(
    '/github/callback',
    passport.authenticate('github', {
        successRedirect: '/api/auth/success',
        failureRedirect: '/api/auth/fail',
    })
);
module.exports = router;