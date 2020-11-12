const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.getUsers);
router.get('/:id', controller.getUser);

module.exports = router;
