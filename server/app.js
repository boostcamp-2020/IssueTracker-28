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

const app = express();


sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(passport.initialize());
passportConfig();
jwtConfig();

app.use('/api', apiRouter);

module.exports = app;
