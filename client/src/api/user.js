import axios from 'axios';

const getUsers = async () => {
  const response = await axios.get('/api/user/list');
  return response.data;
};

const getUser = async () => {
  const response = await axios.get(`/api/user/${id}`);
  return response.data;
};

export { getUsers, getUser };
