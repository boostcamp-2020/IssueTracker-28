const db = require('./db/comment');
exports.getComments = async (issueId) => {
  const comments = await db.selectComments(issueId);
  const data = comments.map((comment) => {
    const temp = {};
    temp.id = comment.id;
    temp.content = comment.content;
    temp.time = comment.updatedAt;
    temp.author = {
      userId: comment['user.user_id'],
      profileImg: comment['user.profile_img'],
    };
    return temp;
  });
  return data;
};
exports.createComment = async (params) => {
  const results = await db.insertComment(params);
  return results;
};
exports.updateComment = async (params) => {
  const results = await db.updateCommentConent(params);
  return results;
};
exports.deleteComment = async (id) => {
  const results = await db.deleteComment(id);
  return results;
};
