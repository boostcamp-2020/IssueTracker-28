import axios from 'axios';

export async function getUsers() {
  const response = await axios.get('/api/user/list');
  return response.data;
}
