const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');

require('dotenv').config();

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET,
};
const JWTVerify = async (jwtPayload, done) => {
  const { userId } = jwtPayload;
  console.log(jwtPayload, userId);
  const user = 'dong';
  //const user = await UserApi.findUser(userId);
  if (!user) {
    return done(null, false, { reason: '올바르지 않은 인증정보 입니다.' });
  }
  done(null, user.name);
};
module.exports = () => {
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};
