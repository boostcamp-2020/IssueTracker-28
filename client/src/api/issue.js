import axios from 'axios';

export async function getIssues() {
  const response = await axios.get('/api/issue/list');
  return response.data;
}
