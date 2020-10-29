import axios from 'axios';

const onLogin = () => {
    axios.get('/api/auth/github')
        .then(onLoginSuccess)
        .catch(error => {
            console.log(error)
        });
}


const onLoginSuccess = (res) => {
    console.log(res.token)
    console.log(res.header)
    const { accessToken } = res.token;

    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = accessToken;
}

export default { onLogin, onLoginSuccess }