const express = require('express');

const router = express.Router();
const authRouter = require('./auth/index');

router.use('/auth', authRouter);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
ports = router;
