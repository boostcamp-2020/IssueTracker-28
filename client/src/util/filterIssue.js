export function filterIssue(issue, filters) {
    const { author, milestone, status, assignees, labels } = filters;
    console.log("#### assigness : ", issue.assignees)
    if ((author === '*' || issue.author === author) &&
        (milestone === '*' || issue.milestone === milestone) &&
        (status === '*' || issue.status === status) &&
        (assignees === '*' || JSON.stringify(assignees) === JSON.stringify(issue.assignees) || issue.assignees.includes(assignees[0])) &&
        (labels === '*' || checkLabelsItem(labels, issue.labels))) {
        return true;
    }
    return false;
}

const checkLabelsItem = (filterLabels, issueLabels) => {
    if (JSON.stringify(filterLabels) === JSON.stringify(issueLabels)) return true;
    if (JSON.stringify(filterLabels) === '[]') return false;
    const issueLabelNames = issueLabels.map((i) => i.name)
    for (let i = 0; i < filterLabels.length; i++) {
        if (!issueLabelNames.includes(filterLabels[i])) {
            return false;
        }
    }
    return true;
}