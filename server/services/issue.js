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

exports.getIssues = async () => {
  const results = await db.selectIssues();
  const data = [];

  for (const result of results) {
    const issue = {};
    issue.id = result.id;
    issue.title = result.title;
    issue.content = result.content;
    issue.author = result.user.dataValues.user_id;
    if (result.milestone) issue.milestone = result.milestone.dataValues.title;
    else issue.milestone = null;
    if (result.status === 0) issue.status = 'opened';
    else issue.status = 'closed';
    issue.labels = await getLabels(result);
    issue.assignees = await getAssignees(result);
    issue.time = result.dataValues.updated_at;

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

  const issueDetail = {};
  issueDetail.id = issue.id;
  issueDetail.title = issue.title;
  issueDetail.content = issue.content;
  issueDetail.author = issue.user.dataValues.user_id;
  if (issue.milestone) issueDetail.milestone = issue.milestone.dataValues.title;
  else issueDetail.milestone = null;
  if (issue.status === 0) issueDetail.status = 'opened';
  else issueDetail.status = 'closed';
  issueDetail.labels = await getLabels(issue);
  issueDetail.assignees = await getAssignees(issue);
  issueDetail.time = issue.dataValues.updated_at;
  data.issueDetail = issueDetail;
  data.comments = await getComments(issueId);

  return data;
};
