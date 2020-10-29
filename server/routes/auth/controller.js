const jwt = require('jsonwebtoken');

const githubLogin = async(req, res, next) => {
    try {
        req.login(req.user, { session: false }, (loginError) => {
            if (loginError) {
                return res.status(400).json({ message: loginError });
            }
            const { id, userId } = req.user;
            const token = jwt.sign({ id, userId }, process.env.JWT_SECRET, {
                expiresIn: '1d',
            });
            req.token = token;
            next();
        });
    } catch (error) {
        next.log(error);
    }
};
const githubLoginRedirect = (req, res) => {
    console.log(req)
    return res.json({ token: req.token });
};
module.exports = { githubLogin, githubLoginRedirect };