const { Comment } = require('../../models');

exports.insertComment = async (params) => {
  const issues = await Comment.create({
    raw: true,
    content: params.content,
    issueId: params.issue,
    userId: params.userId,
  });

  return issues;
};
exports.updateCommentConent = async (params) => {
  try {
    await Comment.update(
      { content: params.content },
      {
        where: {
          id: params.id,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
