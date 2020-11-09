import axios from 'axios';

const getLabels = async () => {
  const response = await axios.get('/api/label/list');
  return response.data;
};

export { getLabels };
