const jwt = require('jsonwebtoken');

const githubLogin = async(req, res, next) => {
    console.log('****** ', req.user)
    try {
        const { id, userId } = req.user;
        const token = jwt.sign({ id, userId }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        res.cookie('auth_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
            httpOnly: false,
        });
        res.cookie('user_id', req.user.userId, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
            httpOnly: false,
        });
        res.cookie('id', req.user.id, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
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