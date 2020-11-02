const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const { User } = require('../models');

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET,
};

const JWTVerify = async (jwtPayload, done) => {
  const user = await User.findOne({ where: { id: jwtPayload.id } });
  if (!user) {
    return done(null, false, { message: '올바르지 않은 인증정보 입니다.' });
  }
  return done(null, user);
};

module.exports = () => {
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};
