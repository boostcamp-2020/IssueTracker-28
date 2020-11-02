import axios from 'axios';

export async function getMilestones() {
  const response = await axios.get('/api/milestone/list');
  return response.data;
}
