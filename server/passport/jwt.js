const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const UserServices = require('../services/user');

require('dotenv').config();

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET,
};
const JWTVerify = async (jwtPayload, done) => {
  const { userId } = jwtPayload;
  const user = await UserServices.findUser(userId);
  if (!user) {
    return done(null, false, { message: '올바르지 않은 인증정보 입니다.' });
  }
  done(null, user);
};
module.exports = () => {
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};
