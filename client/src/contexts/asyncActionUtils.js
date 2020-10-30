/**
 * @function createAsyncDispatcher
 * @param {액션의 타입 (예: GET_ISSUES)} type
 * @param {Promise를 만들어주는 함수} promiseFn
 */
export function createAsyncDispatcher(type, promiseFn) {
  // 성공, 실패에 대한 액션 타입 문자열
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  /**
   * @function actionHandler
   * @param {액션을 발생시키는 함수} dispatch
   * @param {나머지 파라미터} rest
   */
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); // 요청 시작
    try {
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data,
      }); // 요청 성공
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      }); // 요청 실패
    }
  }

  return actionHandler;
}

// IssuesContext에서 사용할 기본 상태
export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
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

/**
 * @function createAsyncHandler 3가지 액션을 처리하는 리듀서
 * @param {액션 타입} type
 * @param {리듀서에서 사용할 필드 이름 (예: issues)} key
 */
export function createAsyncHandler(type, key) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 각 요청에 대하여 3가지(시작, 성공, 실패) 액션을 처리하는 함수
  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  }

  return handler;
}
