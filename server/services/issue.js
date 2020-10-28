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
  const results = await db.selectIssue();

  const data = [];

  for (const result of results) {
    const issue = {};
    issue.id = result.id;
    issue.title = result.title;
    issue.content = result.content;
    issue.author = result.user.dataValues.user_id;
    if (result.milestone) issue.milestone = result.milestone.dataValues.title;
    else issue.milestone = null;
    if (result.status === 0) issue.status = 'open';
    else issue.status = 'close';
    issue.labels = await getLabels(result);
    issue.assignees = await getAssignees(result);
    issue.time = result.dataValues.updated_at;

    data.push(issue);
  }

  return data;
};
