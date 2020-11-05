const { User, Issue, Milestone, IssueAssignee, IssueLabel, sequelize } = require('../../models');

exports.selectIssue = async () => {
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'content', 'user_id', 'milestone_id', 'status', 'updated_at'],
    include: [{
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
exports.insertIssue = async (params) => {
  const issues = await Issue.create({
    raw: true,
    title: params.title,
    content: params.content,
    milestoneId: params.milestone,
    userId: params.user,
    status: params.status,
  });

  return issues;
};

exports.insertIssueAssignee = async (params) => {
  const results = await IssueAssignee.create({
    raw: true,
    userId: params.assignees,
    issueId: params.issueId,
  });

  return results;
};

exports.insertIssueLabel = async (params) => {
  const results = await IssueLabel.create({
    raw: true,
    labelId: params.labels,
    issueId: params.issueId,
  });
  console.log('여기 : ', results);
  return results;
};


exports.updateIssueStatus = async (ids, status) => {
  try {
    await Issue.update({ status }, {
      where: {
        id: ids,
      },
    });
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
};