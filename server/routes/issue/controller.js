const issueServices = require('../../services/issue');

/*
    GET /api/issue/list
    * 전체 이슈 목록 조회 API
*/
exports.getIssues = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const issues = await issueServices.getIssues(userId);

    res.json({
      message: '전체 이슈 목록 조회',
      data: issues,
    });
  } catch (error) {
    next(error);
  }
};
