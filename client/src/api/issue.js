import API from './common';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';

export async function getIssues() {
    const response = await API.get('/issue/list');
    return response.data;
}

export async function updateIssueStatus(issueIDs, status) {
    const response = await axios.put(`/api/issue/status`, {
        ids: issueIDs,
        status: status
    })
    return response;
}