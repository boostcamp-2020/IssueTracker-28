const {
  User,
  Issue,
  Milestone,
  IssueAssignee,
  IssueLabel,
  Comment,
  sequelize,
} = require('../../models');

exports.selectIssues = async () => {
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'content', 'user_id', 'milestone_id', 'status', 'updated_at'],
    include: [
      {
        model: User,
        attributes: ['id', 'user_id', 'profile_img'],
      },
      {
        model: Milestone,
        attributes: ['id', 'title'],
      },
      {
        model: Comment,
        attributes: ['user_id'],
      },
    ],
    order: sequelize.literal('id DESC'),
  });

  return issues;
};

exports.selectIssue = async (id) => {
  const issue = await Issue.findOne({
    attributes: ['id', 'title', 'content', 'user_id', 'milestone_id', 'status', 'updated_at'],
    where: { id },
    include: [
      {
        model: User,
        attributes: ['id', 'user_id', 'profile_img'],
      },
      {
        model: Milestone,
        attributes: ['id', 'title'],
      },
    ],
    order: sequelize.literal('id DESC'),
  });

  return issue;
};

exports.insertIssue = async (params) => {
  const issues = await Issue.create({
    raw: true,
    title: params.title,
    content: params.content,
    milestoneId: params.milestone,
    userId: params.userId,
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
  return results;
};

exports.updateIssueStatus = async (ids, status) => {
  try {
    await Issue.update(
      { status },
      {
        where: {
          id: ids,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

exports.updateIssueContent = async (ids, content) => {
  try {
    await Issue.update(
      { content },
      {
        where: {
          id: ids,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

exports.selectComments = async (issueId) => {
  const results = await Comment.findAll({
    attributes: ['id', 'content', 'user_id', 'updated_at'],
    where: { issueId },
    include: [
      {
        model: User,
        attributes: ['id', 'user_id'],
      },
    ],
    raw: true,
  });
  return results;
};

exports.updateIssueTitle = async (id, title) => {
  try {
    await Issue.update({ title }, { where: { id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.addIssueAssignee = async (issueId, userId) => {
  try {
    await IssueAssignee.create({ issueId, userId });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.addIssueLabel = async (issueId, labelId) => {
  try {
    await IssueLabel.create({ issueId, labelId });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.addIssueMilestone = async (id, milestoneId) => {
  try {
    await Issue.update({ milestoneId }, { where: { id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.deleteIssueAssignee = async (issueId, userId) => {
  try {
    await IssueAssignee.destroy({ where: { issueId, userId } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.deleteIssueLabel = async (issueId, labelId) => {
  try {
    await IssueLabel.destroy({ where: { issueId, labelId } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.deleteIssueMilestone = async (id) => {
  try {
    await Issue.update({ milestoneId: null }, { where: { id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.deleteIssue = async (id) => {
  try {
    await Issue.destroy({ where: { id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
exports.deleteIssueAssigneeWithID = async (issueId) => {
  try {
    await IssueAssignee.destroy({ where: { issueId } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
exports.deleteIssueLabelWithID = async (issueId) => {
  try {
    await IssueLabel.destroy({ where: { issueId } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
