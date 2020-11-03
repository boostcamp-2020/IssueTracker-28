import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  users: {
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
  loading: false,
  data: null,
  error: err,
});

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        users: loadingState,
      };
    case 'SET_USER_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };
    case 'SET_USER_ERROR':
      return {
        ...state,
        users: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}
