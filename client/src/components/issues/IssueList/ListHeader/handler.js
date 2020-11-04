const updateLabels = (dispatch, filters, item) => {
  if (item === null)
    return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, labels: new Set() } });
  if ([...filters.labels].includes(item)) {
    filters.labels.delete(item);
    if (filters.labels.size === 0)
      return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, labels: '*' } });
    return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters } });
  }
  if (filters.labels === '*')
    return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, labels: new Set([item]) } });
  return dispatch({
    type: 'UPDATE_FILTER',
    filters: { ...filters, labels: new Set([...filters.labels, item]) },
  });
};

const updateAssignees = (dispatch, filters, item) => {
  if (item === null)
    return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, assignees: new Set() } });
  if ([...filters.assignees].includes(item)) {
    filters.assignees.delete(item);
    if (filters.assignees.size === 0)
      return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, assignees: '*' } });
    return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters } });
  }
  if (filters.assignees === '*')
    return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, assignees: new Set([item]) } });
  return dispatch({
    type: 'UPDATE_FILTER',
    filters: { ...filters, assignees: new Set([...filters.assignees, item]) },
  });
};

const handler = (state, dispatch) => {
  const { filters } = state;
  return (item, type) => {
    switch (type) {
      case 'author':
        if (filters.author === item)
          return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, author: '*' } });
        return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, author: item } });
      case 'label':
        return updateLabels(dispatch, filters, item);
      case 'milestone':
        if (filters.milestone === item)
          return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, milestone: '*' } });
        return dispatch({ type: 'UPDATE_FILTER', filters: { ...filters, milestone: item } });
      case 'assignees':
        return updateAssignees(dispatch, filters, item);
      default:
    }
  };
};

export default handler;
