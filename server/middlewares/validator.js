exports.check = (req, res, next) => {
  req.check('title').exists();
  req.check('content').exists();
  req.check('assignees').exists();
  req.check('labels').exists();
  req.check('milestone').exists();

  req.check('title', 'Invalid title').isString();
  // 빈배열이라도 들어와야함
  req.check('assignees', 'Invalid assignees').isArray();
  req.check('labels', 'Invalid labels').isArray();

  const error = req.validationErrors();
  if (error) {
    res.status(400).send(`Bad Request : ${error}`);
  } else {
    next();
  }
};
