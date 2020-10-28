const db = require('./issue-db');

exports.getIssues = async (userId) => {
  const issues = await db.selectIssue(userId);

  const data = {};
  data.issue = [];
  issues.forEach((issue) => {
    console.log(issue);
  });
  return data;
};
