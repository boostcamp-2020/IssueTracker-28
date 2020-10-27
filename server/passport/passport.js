const passport = require('passport');
const { Strategy: GithubStrategy } = require('passport-github');

require('dotenv').config();

const githubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://127.0.0.1:3000/auth/github/callback',
};

const githubLoginVerify = async (accessToken, refreshToken, profile, done) => {
  try {
    const {
      _json: { id, login, node_id },
    } = profile;
    const userInfo = { id, login, node_id };
    // todo : user DB 조회
    console.log('userInfo :', userInfo);
    return done(null, userInfo);
  } catch (err) {
    return done(null, false, { msg: '올바르지 않은 인증정보 입니다.' });
  }
};

// session 방식을 통한 유저인증
// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

module.exports = () => {
  passport.use('github', new GithubStrategy(githubConfig, githubLoginVerify));
};
