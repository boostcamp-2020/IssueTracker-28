const router = require('express').Router();
const controller = require('./controller');

router.post('/test', controller.upload.single('filename'), controller.callback);
module.exports = router;
