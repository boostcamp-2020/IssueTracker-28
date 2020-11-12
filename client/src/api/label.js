import API from './common';

async function getLabels() {
  const response = await API.get('/label/list');
  return response.data;
}

async function createLabel({ name, desc, color }) {
  const response = await API.post('/label', {
    name,
    desc,
    color,
  });
  return response;
}

async function updateLabel(id, params) {
  const response = await API.put(`/label/${id}`, {
    name: params.name,
    desc: params.desc,
    color: params.color,
  });
  return response;
}

async function deleteLabel(id) {
  const response = await API.delete(`/label/${id}`);
  return response;
}

export { getLabels, createLabel, updateLabel, deleteLabel };
