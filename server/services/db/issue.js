const { User, Issue, Milestone, sequelize } = require('../../models');

exports.selectIssue = async () => {
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'content', 'user_id', 'milestone_id', 'status', 'updated_at'],
    include: [
      {
        model: User,
        attributes: ['id', 'user_id'],
      },
      {
        model: Milestone,
        attributes: ['id', 'title'],
      },
    ],
    order: sequelize.literal('id DESC'),
  });

  return issues;
};
