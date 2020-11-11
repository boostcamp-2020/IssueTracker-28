import API from './common';

const createComment = async (content, issueId) => {
  const response = await API.post('/comment', {
    content,
    issue: issueId,
    user: localStorage.getItem('user_id'),
  });
  return response.data;
};

const updateComment = async (id, content) => {
  const response = await API.put(`/comment/${id}`, {
    content,
  });
  return response;
};

export { createComment, updateComment };
