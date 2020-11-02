export function filterIssue(issue, filters) {
    if ((filters.author === '*' || issue.author === filters.author) &&
        (filters.milestone === '*' || issue.milestone === filters.milestone) &&
        (filters.status === '*' || issue.status === filters.status) &&
        (filters.assignees === '*' || checkFilterItem(filters.assignees, issue.assignees)) &&
        (filters.labels === '*' || checkFilterItem(filters.labels, issue.labels))) {
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

// const initialFilters = {
//     status: 'opened',
//     author: '*', // ""
//     labels: ['*'], // []
//     milestone: '*', // ""
//     assignees: ['*'] // []
// }