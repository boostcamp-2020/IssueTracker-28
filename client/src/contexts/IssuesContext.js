import React, { createContext, useReducer, useContext } from 'react';
import { createAsyncDispatcher, createAsyncHandler, initialAsyncState } from './asyncActionUtils';
import * as api from '../api/issue';

// IssuesContext 에서 사용 할 기본 상태
const initialState = {
  issues: initialAsyncState,
};

const issuesHandler = createAsyncHandler('GET_ISSUES', 'issues');

// 위에서 만든 객체, 유틸 함수들을 사용해 리듀서 작성
function issuesReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUES':
    case 'GET_ISSUES_SUCCESS':
    case 'GET_ISSUES_ERROR':
      return issuesHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
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
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

// state를 쉽게 조회할 수 있게 해주는 커스텀 hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find IssuesProvider!');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find IssuesProvider!');
  }
  return dispatch;
}

export const getIssues = createAsyncDispatcher('GET_ISSUES', api.getIssues);
