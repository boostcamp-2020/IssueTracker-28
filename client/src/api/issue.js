import API from './common';
import { ThemeConsumer } from 'styled-components';

const updateIssueStatus = async (issueIDs, status) => {
    const response = await API.put(`/issue/status`, {
        ids: issueIDs,
        status: status
    })
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

export { getIssues, getIssueDetail, updateIssueStatus };

