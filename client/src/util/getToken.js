const getToken = (token) => {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(token))
        .split('=')[1];
};

export { getToken };