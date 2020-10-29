const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const passportConfig = require('./passport/passport');
const jwtConfig = require('./passport/jwt');
require('dotenv').config();
const { sequelize } = require('./models');
const apiRouter = require('./routes/index');
const cors = require('cors');
const app = express();
app.use(cors());
const session = require('express-session');
app.use(session({ secret: 'SECRET_CODE', resave: true, saveUninitialized: false }));
sequelize.sync();
passportConfig();
jwtConfig();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();
jwtConfig();
app.use('/api', apiRouter);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err);
    res.status(err.status || 500).json({
        code: err.status,
        message: '에러 발생',
    });
});
module.exports = app;