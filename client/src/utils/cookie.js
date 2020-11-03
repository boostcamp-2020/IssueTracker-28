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

const splitCookie = (userObj, cookie) => {
  let user = userObj;
  if (cookie.includes('user') && cookie.includes('token')) {
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
export default { getToken, deleteCookie, splitCookie };
