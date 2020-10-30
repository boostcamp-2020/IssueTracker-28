const passport = require('passport');
const { Strategy: GithubStrategy } = require('passport-github2');
const UserServices = require('../services/user');
require('dotenv').config();
const githubConfig = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/api/auth/github/callback',
};
const githubLoginVerify = async(accessToken, refreshToken, profile, done) => {
    try {
        const {
            _json: { login },
        } = profile;
        const user = await UserServices.findUser(login);
        if (user) {
            return done(null, user);
        }
        const addUser = await UserServices.insertUser(login);
        return done(null, addUser.dataValues);
    } catch (err) {
        return done(null, false, { msg: '올바르지 않은 인증정보 입니다.' });
    }
};
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
module.exports = () => {
    passport.use('github', new GithubStrategy(githubConfig, githubLoginVerify));
};