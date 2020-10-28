const jwt = require('jsonwebtoken');
const passport = require('passport');
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
      next();
    });
  } catch (error) {
    next.log(error);
  }
};
const githubLoginRedirect = (req, res) => {
  return res.redirect('/auth/success');
};
module.exports = { githubLogin, githubLoginRedirect };
