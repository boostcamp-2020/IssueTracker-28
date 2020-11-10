import axios from 'axios';

async function getLabels() {
    const response = await axios.get('/api/label/list');
    return response.data;
}

async function createLabel(params) {
    const response = await axios.post('/api/label', {
        name: params.name,
        desc: params.desc,
        color: params.color
    });
    return response;
}

async function updateLabel(id, params) {
    const response = await axios.put('/api/label', {
        id: id,
        name: params.name,
        desc: params.desc,
        color: params.color
    });
    return response;
}

async function deleteLabel(id) {
    const response = await axios.delete(`/api/label/${id}`);
    return response;
}

export { getLabels, createLabel, updateLabel, deleteLabel };