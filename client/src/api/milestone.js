import axios from 'axios';

const getMilestones = async () => {
  const response = await axios.get('/api/milestone/list');
  return response.data;
};

const createMilestone = async ({ status, title, due_date, desc }) => {
  let params = {};
  if (due_date.length === 0 && desc.length === 0) params = { status, title };
  else if (due_date.length === 0) params = { status, title, desc };
  else if (desc.length === 0) params = { status, title, due_date };
  else params = { status, title, due_date, desc };

  const response = await axios.post('/api/milestone', params);
  return response.data;
};

const updateMilestone = async ({ id, title, due_date, desc }) => {
  let params = {};
  if (due_date.length === 0 && desc.length === 0) params = { title };
  else if (due_date.length === 0) params = { title, desc };
  else if (desc.length === 0) params = { title, due_date };
  else params = { title, due_date, desc };

  const response = await axios.put(`/api/milestone/${id}`, params);
  return response.data;
};

export { getMilestones, createMilestone, updateMilestone };
