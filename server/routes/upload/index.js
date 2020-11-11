const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.upload.single('filename'), controller.callback);
module.exports = router;
