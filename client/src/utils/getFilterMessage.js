const getFilterMessage = (filter, searchKeywords) => {
  const { status, author, labels, milestone, assignees, mentions } = filter;
  let result = '';
  result += `${status === '*' ? 'is:issue' : ` is:${status} is:issue`}`;
  result += `${author === '*' ? '' : ` author:${author}`}`;
  result += `${labels === '*' ? '' : labels.size === 0 ? ' no:labels' : ` labels:${[...labels].map((l) => l)}`}`;
  result += `${milestone === '*' ? '' : milestone === null ? ' no:milestone' : ` milestone:${milestone}`}`;
  result += `${assignees === '*'
    ? ''
    : assignees.size === 0
      ? ' no:assignees'
      : ` assignees:${[...assignees].map((a) => a)}`
    }`;
  result += `${mentions === '*' ? '' : ' mentions:@me'}`;
  result += `${searchKeywords ? (searchKeywords.length === 0 ? '' : searchKeywords.join(' ')) : ''}`;
  return result;
};

export default getFilterMessage;
