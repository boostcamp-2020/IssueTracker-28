import API from './common';

export async function getIssues() {
    const response = await API.get('/issue/list');
    console.log(response.data)
    return response.data;
}