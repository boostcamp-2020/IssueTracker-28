const jwt = require('jsonwebtoken');
const githubLogin = async (req, res, next) => {
  try {
    req.login(req.user, { session: false }, (loginError) => {
      if (loginError) {
        return res.status(400).json({ msg: loginError });
      }
      const { id, login } = req.user;
      const token = jwt.sign({ id, login }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
      req.token = token;
      // 토큰을 백엔드에서 저장을 할 수 있느지 여부 (auth)
      // 프론트에서 사용하는걸 적용?
      next();
    });
  } catch (error) {
    next.log(error);
  }
};
const githubLoginRedirect = (req, res) => {
  return res.json({ token: req.token });
};
module.exports = { githubLogin, githubLoginRedirect };
