const db = require('./db/comment');
exports.createComment = async (params) => {
  const results = await db.insertComment(params);
  return results;
};
exports.updateComment = async (params) => {
  const results = await db.updateCommentConent(params);
  return results;
};
