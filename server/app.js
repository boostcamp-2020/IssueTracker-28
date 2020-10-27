const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const passportConfig = require('./passport/passport');
const jwtConfig = require('./passport/jwt');
const app = express();

// session 방식을 통한 유저인증
// const session = require('express-session');
// app.use(
//   session({ secret: 'SECRET_CODE', resave: true, saveUninitialized: false })
// );
// app.use(passport.session());
const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(passport.initialize());
passportConfig();
jwtConfig();

app.use('/', indexRouter);

module.exports = app;
