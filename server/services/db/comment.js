const { Comment } = require('../../models');
const { User } = require('../../models');
exports.selectComments = async (issueId) => {
  const Comments = await Comment.findAll({
    raw: true,
    where: {
      issueId,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'user_id', 'profile_img'],
      },
    ],
  });

  return Comments;
};

exports.insertComment = async ({ issue, content, userId }) => {
  const comment = await Comment.create({
    raw: true,
    content,
    issueId: issue,
    userId,
  });

  return comment;
};
exports.updateCommentConent = async ({ id, content }) => {
  try {
    await Comment.update(
      { content },
      {
        where: {
          id,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
exports.deleteComment = async (id) => {
  try {
    await Comment.destroy({
      where: {
        id,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
