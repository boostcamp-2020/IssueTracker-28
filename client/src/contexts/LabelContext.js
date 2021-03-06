import React, { useReducer, createContext, useContext } from 'react';
import * as api from '@api/label';

const initialState = {
  labels: {
    loading: false,
    data: null,
    error: null,
  },
  selectedLabels: new Set(),
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

function labelReducer(state, action) {
  switch (action.type) {
    case 'GET_LABELS':
      return {
        ...state,
        labels: loadingState,
      };
    case 'GET_LABELS_SUCCESS':
      return {
        ...state,
        labels: success(action.data),
      };
    case 'GET_LABELS_ERROR':
      return {
        ...state,
        labels: error(action.error),
      };
    case 'CREATE_LABELS_ERROR':
      return {
        ...state,
        labels: error(action.error),
      };
    case 'UPDATE_LABELS_ERROR':
      return {
        ...state,
        labels: error(action.error),
      };
    case 'DELETE_LABELS_ERROR':
      return {
        ...state,
        labels: error(action.error),
      };
    case 'UPDATE_SELECTED_LABELS':
      return {
        ...state,
        selectedLabels: action.data,
      };
    default:
      return state;
  }
}

const LabelStateContext = createContext(null);
const LabelDispatchContext = createContext(null);

export function LabelProvider({ children }) {
  const [state, dispatch] = useReducer(labelReducer, initialState);

  return (
    <LabelStateContext.Provider value={state}>
      <LabelDispatchContext.Provider value={dispatch}>{children}</LabelDispatchContext.Provider>
    </LabelStateContext.Provider>
  );
}

export function useLabelState() {
  const state = useContext(LabelStateContext);
  if (!state) {
    throw new Error('Cannot find LabelProvider!');
  }
  return state;
}

export function useLabelDispatch() {
  const dispatch = useContext(LabelDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find LabelProvider!');
  }
  return dispatch;
}

export async function getLabels(dispatch) {
  dispatch({ type: 'GET_LABELS' });
  try {
    const response = await api.getLabels();
    dispatch({ type: 'GET_LABELS_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_LABELS_ERROR', error: e });
  }
}

export async function createLabel(dispatch, params) {
  try {
    await api.createLabel(params);
    getLabels(dispatch);
  } catch (e) {
    dispatch({ type: 'CREATE_LABELS_ERROR', error: e });
  }
}

export async function updateLabel(dispatch, id, params) {
  try {
    await api.updateLabel(id, params);
    getLabels(dispatch);
  } catch (e) {
    dispatch({ type: 'UPDATE_LABELS_ERROR', error: e });
  }
}

export async function deleteLabel(dispatch, id) {
  try {
    await api.deleteLabel(id);
    getLabels(dispatch);
  } catch (e) {
    dispatch({ type: 'DELETE_LABELS_ERROR', error: e });
  }
}
