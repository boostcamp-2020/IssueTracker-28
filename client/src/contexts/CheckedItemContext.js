import React, { useReducer, createContext, useContext } from 'react';

// CheckedItemContext에서 사용할 기본 상태
const initialState = {
  isAllChecked : false,
  checkedItems : new Set()
};

function checkedItemReducer(state, action) {
  switch (action.type) {
    case 'SELECT_ALL':
      return {
        ...state,
        isAllChecked : true,
        //checkedItems에 대한 처리 고민
      }
    case 'DESELECT_ALL':
      return {
          ...state,
          isAllChecked : false,
          checkedItems : new Set()
      }
    case 'CHECKED_UPDATE':
      return{
        ...state,
        checkedItems : action.data
    }
    default:
      return state;
  }
}

// state용 context와 dispatch용 context 따로 만들어주기
const CheckedItemStateContext = createContext(null);
const CheckedItemDispatchContext = createContext(null);

// 위에서 선언한 두가지 context들의 provider로 감싸주는 컴포넌트
export function CheckedItemProvider({ children }) {
  const [state, dispatch] = useReducer(checkedItemReducer, initialState);

  return (
    <CheckedItemStateContext.Provider value={state}>
      <CheckedItemDispatchContext.Provider value={dispatch}> {children}</CheckedItemDispatchContext.Provider>
    </CheckedItemStateContext.Provider>
  );
}

export function useCheckedItemState() {
  const state = useContext(CheckedItemStateContext);
  if (!state) {
    throw new Error('Cannot find CheckedItemProvider!');
  }
  return state;
}

export function useCheckedItemDispatch() {
  const dispatch = useContext(CheckedItemDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find CheckedItemProvider!');
  }
  return dispatch;
}

export function getIssues(dispatch) {
    dispatch({ type: 'GET_ISSUES' });
    try {
      dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'GET_ISSUES_ERROR', error: e });
    }
  }
  