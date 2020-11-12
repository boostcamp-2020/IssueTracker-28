import API from './common';

const getMilestones = async () => {
  const response = await API.get('/milestone/list');
  return response.data;
};

const createMilestone = async ({ status, title, due_date, desc }) => {
  let params = {};
  if (due_date.length === 0 && desc.length === 0) params = { status, title };
  else if (due_date.length === 0) params = { status, title, desc };
  else if (desc.length === 0) params = { status, title, due_date };
  else params = { status, title, due_date, desc };

  const response = await API.post('/milestone', params);
  return response.data;
};

const updateMilestone = async ({ id, title, due_date, desc }) => {
  let params = {};
  if (due_date.length === 0 && desc.length === 0) params = { title, due_date: null, desc: null };
  else if (due_date.length === 0) params = { title, due_date: null, desc };
  else if (desc.length === 0) params = { title, due_date, desc: null };
  else params = { title, due_date, desc };

  const response = await API.put(`/milestone/${id}`, params);
  return response.data;
};

const updateMilestoneStatus = async ({ id, status }) => {
  const response = await API.put(`/milestone/${id}`, { status });
  return response.data;
};

const deleteMilestone = async ({ id }) => {
  const response = await API.delete(`/milestone/${id}`);
  return response.data;
};

export { getMilestones, createMilestone, updateMilestone, updateMilestoneStatus, deleteMilestone };
