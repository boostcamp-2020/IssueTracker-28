import React, { useReducer, createContext, useContext } from 'react';
import * as api from '../api/milestone';

// MilestonesContext에서 사용할 기본 상태
const initialState = {
  milestones: {
    loading: false,
    data: null,
    size: 0,
    open: 0,
    closed: 0,
    error: null,
  },
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  size: 0,
  open: 0,
  closed: 0,
  error: null,
};

// 성공했을 때의 상태를 만들어주는 함수
const success = (data, open, closed) => ({
  loading: false,
  data,
  size: data.length,
  open,
  closed,
  error: null,
});

// 실패했을 때의 상태를 만들어주는 함수
const error = (err) => ({
  loading: true,
  data: null,
  size: 0,
  open: 0,
  closed: 0,
  err,
});

function milestoneReducer(state, action) {
  switch (action.type) {
    case 'GET_MILESTONES':
      return {
        ...state,
        milestones: loadingState,
      };
    case 'GET_MILESTONES_SUCCESS':
      return {
        ...state,
        milestones: success(action.data, action.open, action.closed),
      };
    case 'GET_MILESTONES_ERROR':
      return {
        ...state,
        milestones: error(action.error),
      };
    default:
      return state;
  }
}

// state용 context와 dispatch용 context 따로 만들어주기
const MilestonesStateContext = createContext(null);
const MilestonesDispatchContext = createContext(null);

// 위에서 선언한 두가지 context들의 provider로 감싸주는 컴포넌트
export function MilestonesProvider({ children }) {
  const [state, dispatch] = useReducer(milestoneReducer, initialState);

  return (
    <MilestonesStateContext.Provider value={state}>
      <MilestonesDispatchContext.Provider value={dispatch}>
        {children}
      </MilestonesDispatchContext.Provider>
    </MilestonesStateContext.Provider>
  );
}

export function useMilestonesState() {
  const state = useContext(MilestonesStateContext);

  if (!state) {
    throw new Error('Cannot find MilestonesProvider!');
  }
  return state;
}

export function useMilestonesDispatch() {
  const dispatch = useContext(MilestonesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find MilestonesProvider!');
  }
  return dispatch;
}

export async function getMilestones(dispatch) {
  dispatch({ type: 'GET_MILESTONES' });
  try {
    const response = await api.getMilestones();
    dispatch({
      type: 'GET_MILESTONES_SUCCESS',
      data: response.data,
      open: response.openMilestone,
      closed: response.closedMilestone,
    });
  } catch (e) {
    dispatch({ type: 'GET_MILESTONES_ERROR', error: e });
  }
}
