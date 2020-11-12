import API from './common';

const createIssue = async (title, content, milestone, assignees, labels, user, status = 0) => {
  const response = await API.post(`/issue`, {
    title,
    content,
    milestone,
    assignees,
    labels,
    user,
    status,
  });
  return response;
};

const updateIssueStatus = async (issueIDs, status) => {
  const response = await API.put(`/issue/status`, {
    ids: issueIDs,
    status,
  });
  return response;
};

const updateIssueContent = async (id, content) => {
  const response = await API.put(`/issue/content/${id}`, {
    content,
  });
  return response;
};

const getIssues = async () => {
  const response = await API.get('/issue/list');
  return response.data;
};

const getIssueDetail = async (id) => {
  const response = await API.get(`/issue/detail/${id}`);
  return response.data;
};

const updateIssueTitle = async (id, title) => {
  const response = await API.put(`/issue/title/${id}`, {
    title,
  });
  return response;
};

const updateIssueAssignee = async (id, assignee, flag) => {
  const response = await API.put(`/issue/assignee/${id}`, {
    assignee,
    flag,
  });
  return response;
};

const updateIssueLabel = async (id, label, flag) => {
  const response = await API.put(`/issue/label/${id}`, {
    label,
    flag,
  });
  return response;
};

const updateIssueMilestone = async (id, milestone, flag) => {
  const response = await API.put(`/issue/milestone/${id}`, {
    milestone,
    flag,
  });
  return response;
};

export {
  createIssue,
  getIssues,
  getIssueDetail,
  updateIssueStatus,
  updateIssueTitle,
  updateIssueContent,
  updateIssueAssignee,
  updateIssueLabel,
  updateIssueMilestone,
};
