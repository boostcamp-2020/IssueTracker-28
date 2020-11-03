import axios from 'axios';

export async function getLabels() {
  const response = await axios.get('/api/label/list');
  return response.data;
}
