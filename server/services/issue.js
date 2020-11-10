const db = require('./db/issue');

const getLabels = async (data) => {
  const labels = await data.getLabels();
  const result = [];

  labels.forEach((label) => {
    const temp = {};
    temp.name = label.name;
    temp.color = label.color;
    result.push(temp);
  });
  return result;
};

const getAssignees = async (data) => {
  const assignees = await data.getUsers();
  const result = [];

  assignees.forEach((assignee) => {
    result.push(assignee.userId);
  });
  return result;
};

const makeData = async (issue) => {
  const data = {};
  data.id = issue.id;
  data.title = issue.title;
  data.content = issue.content;
  data.author = issue.user.dataValues.user_id;
  // data.author = {};
  // data.author.userId = issue.user.dataValues.user_id;
  // data.author.profileImg = issue.user.dataValues.profile_img;
  data.milestone = issue.milestone ? issue.milestone.dataValues.title : null;
  data.status = issue.status === 0 ? 'opened' : 'closed';
  data.labels = await getLabels(issue);
  data.assignees = await getAssignees(issue);
  data.time = issue.dataValues.updated_at;
  return data;
};

exports.getIssues = async () => {
  const results = await db.selectIssues();
  const data = [];

  for (const result of results) {
    const issue = await makeData(result);
    data.push(issue);
  }
  return data;
};

exports.createIssue = async (params) => {
  const results = await db.insertIssue(params);
  return results;
};

exports.createIssueAssignees = async (params) => {
  const results = await Promise.all(
    params.assignees.map((assignee) => {
      return db.insertIssueAssignee({ ...params, assignees: assignee });
    })
  );
  return results;
};

exports.createIssueLabels = async (params) => {
  const results = await Promise.all(
    params.labels.map((label) => {
      return db.insertIssueLabel({ ...params, labels: label });
    })
  );
  return results;
};

exports.updateIssueStatus = async (ids, status) => {
  const results = await db.updateIssueStatus(ids, status);
  return results;
};

exports.updateIssueContent = async (ids, content) => {
  const results = await db.updateIssueContent(ids, content);
  return results;
};

const getComments = async (issueId) => {
  const comments = await db.selectComments(issueId);
  const data = comments.map((comment) => {
    const temp = {};
    temp.id = comment.id;
    temp.content = comment.content;
    temp.time = comment.updated_at;
    temp.author = comment['user.user_id'];
    return temp;
  });
  return data;
};

exports.getIssueDetail = async (issueId) => {
  const issue = await db.selectIssue(issueId);
  const data = {};
  data.issueDetail = await makeData(issue);
  data.comments = await getComments(issueId);
  return data;
};

exports.updateIssueTitle = async (id, title) => {
  const result = await db.updateIssueTitle(id, title);
  return result;
};

exports.addIssueAssignee = async (id, assignee) => {
  const result = await db.addIssueAssignee(id, assignee);
  return result;
};

exports.addIssueLabel = async (id, label) => {
  const result = await db.addIssueLabel(id, label);
  return result;
};

exports.addIssueMilestone = async (id, milestone) => {
  const result = await db.addIssueMilestone(id, milestone);
  return result;
};

exports.deleteIssueAssignee = async (id, assignee) => {
  const result = await db.deleteIssueAssignee(id, assignee);
  return result;
};

exports.deleteIssueLabel = async (id, label) => {
  const result = await db.deleteIssueLabel(id, label);
  return result;
};

exports.deleteIssueMilestone = async (id) => {
  const result = await db.deleteIssueMilestone(id);
  return result;
};
