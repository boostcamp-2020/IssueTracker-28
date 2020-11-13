exports.createIssue = (req, res, next) => {
  req.check('title').isString();
  req.check('content').isString();
  req.check('assignees').isArray();
  req.check('labels').isArray();
  req.check('milestone').isInt();

  const error = req.validationErrors();
  if (error) {
    res.status(400).send(`Validator Result: Bad Request`);
  } else {
    next();
  }
};

exports.createLabel = (req, res, next) => {
  req.check('name').isString();
  if (req.body.desc) req.check('desc').isString();
  req.check('color').isHexColor();

  const error = req.validationErrors();
  if (error) {
    res.status(400).send(`Validator Result: Bad Request`);
  } else {
    next();
  }
};

exports.createMilestone = (req, res, next) => {
  req.check('status').isInt();
  req.check('title').isString();
  if (req.body.dueDate) req.check('dueDate').isString();
  if (req.body.desc) req.check('desc').isString();

  const error = req.validationErrors();
  if (error) {
    res.status(400).send(`Validator Result: Bad Request`);
  } else {
    next();
  }
};
