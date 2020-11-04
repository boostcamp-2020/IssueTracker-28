const issueServices = require('../../services/issue');
const milestoneServices = require('../../services/milestone');
const userServices = require('../../services/user');
/*
    GET /api/issue/list
    * 전체 이슈 목록 조회 API
*/
exports.getIssues = async (req, res, next) => {
  try {
    const issues = await issueServices.getIssues();

    res.json({
      message: '전체 이슈 목록 조회 성공',
      data: issues,
    });
  } catch (error) {
    next(error);
  }
};

/*
    POST /api/issue
    * 새로운 이슈 생성 API
*/
exports.createIssue = async (req, res, next) => {
  try {
    const { title, content, milestone, user, status } = req.body;
    const { id: milestone_id } = await milestoneServices.findMilestone(milestone);
    const { id: user_id } = await userServices.findUser(user);
    const issues = await issueServices.createIssue({
      title,
      content,
      milestone_id,
      user_id,
      status,
    });
    res.json({
      message: '새로운 이슈 생성 성공',
      data: issues,
    });
  } catch (error) {
    next(error);
  }
};
