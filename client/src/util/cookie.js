import LocalStorage from './localStorage';
const getToken = (token) => {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(token))
        .split('=')[1];
};
const deleteCookie = (name) => {
    const date = new Date();
    document.cookie = name + '= ' + '; expires=' + date.toUTCString() + '; path=/';
};
const hasCookie = (userObj, cookie) => {
    if (typeof cookie !== 'undefined' && cookie.includes('user') && cookie.includes('token')) {
        const token = getToken('token');
        const user = getToken('user');
        LocalStorage.setItem('token', token);
        LocalStorage.setItem('user', user);
        userObj = {
            user,
            token,
            authenticated: true,
        };
    } else {
        userObj = {
            user: '',
            token: '',
            authenticated: false,
        };
    }
    return userObj;
};
export default { getToken, deleteCookie, hasCookie };