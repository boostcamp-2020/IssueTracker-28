const checkLabelsItem = (filterLabels, issueLabels) => {
  if (JSON.stringify(filterLabels) === JSON.stringify(issueLabels)) return true;
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
  if (JSON.stringify(filterAssignees) === JSON.stringify(issueAssignees)) return true;
  if (JSON.stringify(filterAssignees) === '[]') return false;
  const issueAssigneesIds = issueAssignees.map((assignee) => assignee.userId);
  for (let i = 0; i < filterAssignees.length; i += 1) {
    if (!issueAssigneesIds.includes(filterAssignees[i])) {
      return false;
    }
  }
  return true;
};

const filterIssue = (issue, filters) => {
  const { author, milestone, status, assignees, labels, mentions } = filters;

  if (
    (author === '*' || issue.author.userId === author) &&
    (milestone === '*' || issue.milestone.title === milestone) &&
    (status === '*' || issue.status === status) &&
    (assignees === '*' || checkAssigneesItem([...assignees], issue.assignees)) &&
    (labels === '*' || checkLabelsItem([...labels], issue.labels)) &&
    (mentions === '*' || issue.commentAuthors.includes(+localStorage.getItem('id')))
  ) {
    return true;
  }
  return false;
};

export default filterIssue;
