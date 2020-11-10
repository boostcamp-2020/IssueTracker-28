const checkLabelsItem = (filterLabels, issueLabels) => {
  if (JSON.stringify(filterLabels) === '[]') return false;
  const issueLabelNames = issueLabels.map((i) => i.name);
  for (let i = 0; i < filterLabels.length; i += 1) {
    if (!issueLabelNames.includes(filterLabels[i])) {
      return false;
    }
  }
  return true;
};

const checkAssigneesItem = (filterAssignees, issueAssignees) => {
  if (JSON.stringify(filterAssignees) === '[]') return false;
  for (let i = 0; i < filterAssignees.length; i += 1) {
    if (!issueAssignees.includes(filterAssignees[i])) {
      return false;
    }
  }
  return true;
};

const filterIssue = (issue, filters) => {
  const { author, milestone, status, assignees, labels } = filters;
  if (
    (author === '*' || issue.author.userId === author) &&
    (milestone === '*' || issue.milestone === milestone) &&
    (status === '*' || issue.status === status) &&
    (assignees === '*' || checkAssigneesItem([...assignees], issue.assignees.userId)) &&
    (labels === '*' || checkLabelsItem([...labels], issue.labels))
  ) {
    return true;
  }
  return false;
};

export default filterIssue;
