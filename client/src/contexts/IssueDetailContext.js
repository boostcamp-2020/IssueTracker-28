import React, { useReducer, createContext, useContext } from 'react';
import * as issueAPI from '@api/issue';
import * as commentAPI from '@api/comment';

const initialState = {
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (err) => ({
  loading: true,
  data: null,
  err,
});

function detailReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data),
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: error(action.error),
      };
    default:
      return state;
  }
}

const IssueDetailStateContext = createContext(null);
const IssueDetailDispatchContext = createContext(null);

export function IssueDetailProvider({ children }) {
  const [state, dispatch] = useReducer(detailReducer, initialState);

  return (
    <IssueDetailStateContext.Provider value={state}>
      <IssueDetailDispatchContext.Provider value={dispatch}>
        {children}
      </IssueDetailDispatchContext.Provider>
    </IssueDetailStateContext.Provider>
  );
}

export function useIssueDetailState() {
  const state = useContext(IssueDetailStateContext);
  if (!state) {
    throw new Error('Cannot find DetailProvider!');
  }
  return state;
}

export function useIssueDetailDispatch() {
  const dispatch = useContext(IssueDetailDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find DetailProvider!');
  }
  return dispatch;
}

export async function getIssue(dispatch, id) {
  dispatch({ type: 'GET_ISSUE' });
  try {
    const response = await issueAPI.getIssueDetail(id);
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
export async function saveIssueTitle(dispatch, id, title) {
  try {
    await issueAPI.updateIssueTitle(id, title);
    // getIssue(dispatch, id);
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
export async function updateIssueStatus(dispatch, id, status) {
  try {
    await issueAPI.updateIssueStatus(id, status);
    getIssue(dispatch, id);
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
export async function updateIssueContent(dispatch, id, content) {
  try {
    await issueAPI.updateIssueContent(id, content);
    getIssue(dispatch, id);
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
export async function createComment(dispatch, id, comment) {
  try {
    await commentAPI.createComment(comment, id);
    getIssue(dispatch, id);
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
export async function updateComment(dispatch, id, issueId, comment) {
  try {
    await commentAPI.updateComment(id, comment);
    getIssue(dispatch, issueId);
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
