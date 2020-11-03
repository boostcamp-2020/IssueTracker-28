import React, { useReducer, createContext, useContext } from 'react';
import * as api from '@api/issue';

export const initialFilters = {
  status : 'opened',
  author : '*', // null
  labels : '*', // []
  milestone : '*', // null
  assignee : '*' // null
}

const getFilterMsg = (filter) =>{
  const {status, author, labels, milestone, assignee} = filter;
  let result = '';
  result = `is:${status} is:issue`
  result += `${author==='*' ? "" : `author:${author}`}`
  result += `${labels==='*' ? "" : labels === "" ? ' no:label' :` label:${labels.map(label=>label.name)}`}`
  result += `${milestone==='*' ? "" : milestone === "" ? ' no:milestone' :` author:${author}`}`
  result += `${assignee==='*' ? "" : assignee === "" ? ' no:assignee' :` assignee:${assignee}`}`
  return result;
}

// IssuesContext에서 사용할 기본 상태
const initialState = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
  filters:initialFilters,
  filterMessage : getFilterMsg(initialFilters)
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태를 만들어주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

// 실패했을 때의 상태를 만들어주는 함수
const error = (err) => ({
  loading: true,
  data: null,
  err,
});

function issuesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return {
        ...state,
        filters : action.filters,
        filterMessage : getFilterMsg(action.filters)
      }
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState,
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data),
      };
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: error(action.error),
      };
    default:
      return state;
  }
}

// state용 context와 dispatch용 context 따로 만들어주기
const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 위에서 선언한 두가지 context들의 provider로 감싸주는 컴포넌트
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);

  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}> {children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

export function useIssuesState() {
  const state = useContext(IssuesStateContext);

  if (!state) {
    throw new Error('Cannot find IssuesProvider!');
  }
  return state;
}

export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find IssuesProvider!');
  }
  return dispatch;
}

export async function getIssues(dispatch) {
  dispatch({ type: 'GET_ISSUES' });
  try {
    const response = await api.getIssues();
    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: e });
  }
}

