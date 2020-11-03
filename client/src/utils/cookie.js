const getToken = (token) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(token))
    .split('=')[1];
};

const deleteCookie = (name) => {
  const date = new Date();
  document.cookie = `${name}= ` + `; expires=${date.toUTCString()}; path=/`;
};

const hasCookie = (cookie) => {
  if (cookie.includes('user') && cookie.includes('token')) return true;
  return false;
};

// 일단 사용X
const getUser = (userObj, cookie) => {
  let user = userObj;
  if (hasCookie(cookie)) {
    const token = getToken('token');
    const userId = getToken('user');
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_id', userId);
    user = {
      user,
      token,
      authenticated: true,
    };
  } else {
    user = {
      user: '',
      token: '',
      authenticated: false,
    };
  }
  return user;
};

const saveUserInfo = () => {
  if (hasCookie(document.cookie)) {
    const token = getToken('auth_token');
    const userId = getToken('user_id');
    const id = getToken('id');
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_id', userId);
    localStorage.setItem('id', id);
    deleteCookie('auth_token');
    deleteCookie('user_id');
    deleteCookie('id');
    window.location.href = '/';
  }
};

export default { getToken, deleteCookie, getUser, hasCookie, saveUserInfo };
