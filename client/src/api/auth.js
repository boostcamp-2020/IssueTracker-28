import axios from 'axios';

const onLogin = () => {
    console.log('hey')
    axios.get('http://localhost:3000/api/issue/list', {})
        .then(result => console.log(result.data))
        .catch(error => {
            console.log(error)
        });
}

const onLoginSuccess = (res) => {
    console.log(res.token)
    const { accessToken } = res.token;

    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = accessToken;
}



export default onLogin;