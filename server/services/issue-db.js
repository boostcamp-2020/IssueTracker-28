const { Issue } = require('../models');

exports.selectIssue = async (userId) => {
  const results = await Issue.findAll({
    attributes: ['id', 'title'],
    where: {
      userId,
    },
  });

  return results;
};
