export const getFilterMessage = (filter) => {
        const { status, author, labels, milestone, assignees } = filter;
        let result = '';
        result += `${status === '*' ? "is:issue" : ` is:${status} is:issue`}`
    result += `${author === '*' ? "" : ` author:${author}`}`
    result += `${labels === '*' ? "" : labels.length === 0 ? ' no:label' : ` label:[${labels.map(l => l)}]`}`
    result += `${milestone === '*' ? "" : milestone === null ? ' no:milestone' : ` milestone:"${milestone}"`}`
    result += `${assignees === '*' ? "" : assignees.length === 0 ? ' no:assignee' : ` assignee:${assignees[0]}`}`
    return result;
}