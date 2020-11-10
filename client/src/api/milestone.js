import axios from 'axios';

const getMilestones = async () => {
  const response = await axios.get('/api/milestone/list');
  return response.data;
};

export { getMilestones };
