import axios from 'axios';

export async function getIssues() {
  const response = await axios.get(
    'http://localhost:3000/api/issue/list'
  );
  return response.data.data;
}