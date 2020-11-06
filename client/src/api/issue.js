import API from './common';

const getIssues = async () => {
  const response = await API.get('/issue/list');
  return response.data;
};

const getIssueDetail = async (id) => {
  const response = await API.get(`/issue/detail/${id}`);
  return response.data;
};

export { getIssues, getIssueDetail };
