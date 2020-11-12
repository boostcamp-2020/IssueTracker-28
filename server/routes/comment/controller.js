const commentServices = require('../../services/comment');
const userServices = require('../../services/user');
/*
    GET /api/comment
    * 새로운 comment 생성 API
*/
exports.getComments = async (req, res, next) => {
  try {
    const { issueId } = req.params;
    const results = await commentServices.getComments(issueId);
    if (results) {
      return res.status(200).json({
        message: '댓글 리스트 조회 성공',
        data: results,
      });
    }
    return res.status(400).json({
      message: '댓글 리스트 조회 실패',
    });
  } catch (error) {
    next(error);
  }
};
/*
    POST /api/comment
    * 새로운 comment 생성 API
*/
exports.createComment = async (req, res, next) => {
  try {
    const { content, issue, user } = req.body;
    const { id: userId } = await userServices.findUser(user);
    const { id: issueId } = await commentServices.createComment({
      content,
      issue,
      userId,
    });
    res.status(200).json({
      message: '새로운 댓글 생성 성공',
      data: issueId,
    });
  } catch (error) {
    next(error);
  }
};
/*
    PUT /api/comment/:id
    * comment 수정 API
*/
exports.updateComment = async (req, res, next) => {
  try {
    const { content } = req.body;
    const { id } = req.params;
    const result = await commentServices.updateComment({
      content,
      id,
    });
    if (result) {
      return res.status(200).json({
        message: '댓글 수정 성공',
        data: result.issueId,
      });
    }
    return res.status(400).json({
      message: '댓글 수정 실패',
    });
  } catch (error) {
    next(error);
  }
};

/*
    DELETE /api/comment/:id
    * comment 삭제 API
*/
exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await commentServices.deleteComment(id);
    if (result) {
      return res.status(200).json({
        message: '댓글 삭제 성공',
      });
    }
    return res.status(400).json({
      message: '댓글 삭제 실패',
    });
  } catch (error) {
    next(error);
  }
};
