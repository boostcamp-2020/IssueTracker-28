const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getLabels);

module.exports = router;
