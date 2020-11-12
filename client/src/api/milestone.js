import API from './common';

const getMilestones = async () => {
  const response = await API.get('/milestone/list');
  return response.data;
};

const createMilestone = async ({ status, title, dueDate, desc }) => {
  let params = {};
  if (dueDate.length === 0 && desc.length === 0)
    params = { status, title, dueDate: null, desc: null };
  else if (dueDate.length === 0) params = { status, title, dueDate: null, desc };
  else if (desc.length === 0) params = { status, title, dueDate, desc: null };
  else params = { status, title, dueDate, desc };

  const response = await API.post('/milestone', params);
  return response.data;
};

const updateMilestone = async ({ id, title, dueDate, desc }) => {
  let params = {};
  if (dueDate.length === 0 && desc.length === 0) params = { title, dueDate: null, desc: null };
  else if (dueDate.length === 0) params = { title, dueDate: null, desc };
  else if (desc.length === 0) params = { title, dueDate, desc: null };
  else params = { title, dueDate, desc };

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
