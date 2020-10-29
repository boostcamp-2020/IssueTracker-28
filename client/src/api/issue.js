import axios from 'axios';

const getIssues = () => {
    axios.post('http://localhost:3000/api/issue/list')
        .then(result => console.log(result.data))
        .catch(error => {
            console.log(error)
        });
}

export default getIssues;