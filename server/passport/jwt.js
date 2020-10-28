const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');

require('dotenv').config();

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET,
};
const JWTVerify = async (jwtPayload, done) => {
  const { userId } = jwtPayload;
  const user = 'dong';
  console.log('jwtpayload: ', jwtPayload);
  // Todo : user DB
  //const user = await UserApi.findUser(userId);
  if (!user) {
    return done(null, false, { reason: '올바르지 않은 인증정보 입니다.' });
  }
  done(null, user);
};
module.exports = () => {
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};
