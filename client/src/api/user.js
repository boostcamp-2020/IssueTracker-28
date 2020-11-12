import API from './common';

const getUsers = async () => {
  const response = await API.get('/user/list');
  return response.data;
};

export { getUsers };
