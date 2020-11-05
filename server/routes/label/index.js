const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getLabels);
router.post('/', controller.createLabel);

module.exports = router;
