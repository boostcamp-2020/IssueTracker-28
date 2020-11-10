import axios from 'axios';

const getUsers = async () => {
  const response = await axios.get('/api/user/list');
  return response.data;
};

export { getUsers };
