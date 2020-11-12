const jwt = require('jsonwebtoken');

const githubLogin = async (req, res, next) => {
  try {
    const { id, userId, profileImg } = req.user;
    const token = jwt.sign({ id, userId }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.cookie('auth_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      httpOnly: false,
    });
    res.cookie('user_id', userId, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      httpOnly: false,
    });
    res.cookie('id', id, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      httpOnly: false,
    });
    res.cookie('profile_img', profileImg, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      encode: String,
      httpOnly: false,
    });
    next();
  } catch (error) {
    next.log(error);
  }
};

const githubLoginRedirect = (req, res) => {
  if (process.env.NODE_ENV === 'production') return res.redirect('/');
  return res.send('<script>window.location.href="http://127.0.0.1:8080"</script>');
};

module.exports = { githubLogin, githubLoginRedirect };
