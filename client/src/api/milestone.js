import axios from 'axios';

export async function getIssues() {
  const response = await axios.get('/api/milestone/list');
  return response.data;
}
