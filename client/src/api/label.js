import axios from 'axios';

export async function getLabels() {
    const response = await axios.get('/api/label/list');
    return response.data;
}

export async function createLabel(params) {
    const response = await axios.post('/api/label', {
        name: params.name,
        desc: params.desc,
        color: params.color
    });
    return response;
}
export async function updateLabel(id, params) {
    const response = await axios.put('/api/label', {
        id: id,
        name: params.name,
        desc: params.desc,
        color: params.color
    });
    return response;
}

export async function deleteLabel(id) {
    const response = await axios.delete(`/api/label/${id}`);
    return response;
}