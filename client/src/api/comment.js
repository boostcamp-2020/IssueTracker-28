import API from './common';

const getComments = async (id) => {
  const response = await API.get(`/comment/${id}`);
  return response;
};

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

const deleteComment = async (id) => {
  const response = await API.delete(`/comment/${id}`);
  return response;
};
export { getComments, createComment, updateComment, deleteComment };
