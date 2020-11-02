const jwt = require('jsonwebtoken');

const githubLogin = async (req, res, next) => {
  try {
    const { id, userId } = req.user;
    const token = jwt.sign({ id, userId }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.cookie('token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      httpOnly: false,
    });
    res.cookie('user', req.user.userId, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      httpOnly: false,
    });
    next();
  } catch (error) {
    next.log(error);
  }
};

const githubLoginRedirect = (req, res) => {
  // return res.send('<script>window.location.href="http://127.0.0.1:8080"</script>');
  // const { id, userId } = req.user;
  // const token = jwt.sign({ id, userId }, process.env.JWT_SECRET, {
  //   expiresIn: '1d',
  // });
  // res.json({
  //   token,
  // });
  // Todo : 배포와 버젼환경에서 코드 나누기
  // localStorage.setItem('token', token);
  // return res.json({
  //   token,
  // });
  return res.redirect('/');
};

module.exports = { githubLogin, githubLoginRedirect };
