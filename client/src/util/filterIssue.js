export function filterIssue(issue, filters) {
    const { author, milestone, status, assignee, labels } = filters;
    if ((author === '*' || issue.author === author) &&
        (milestone === '*' || issue.milestone === milestone) &&
        (status === '*' || issue.status === status) &&
        (assignee === '*' || issue.assignee.includes(assignee)) &&
        (labels === '*' || checkFilterItem(labels, issue.labels))) {
        return true;
    }
    return false;
}

const checkFilterItem = (filterArr, IssueArr) => {
    if (filterArr === IssueArr) return true;
    for (let i = 0; i < filterArr.length; i++) {
        if (!IssueArr.includes(filterArr[i])) {
            return false;
        }
    }
    return true;
}