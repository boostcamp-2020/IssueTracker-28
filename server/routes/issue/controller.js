const issueServices = require('../../services/issue');

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
    // Todo : Postman은 배열을 인식하지 못함 -> 변경 필요
    const assignees = [8, 9];
    const labels = [2, 3];
    // Todo : 프론트에서 요청하는 값에 의해서 변경 필요
    // const { id: milestone_id } = await milestoneServices.findMilestone(milestone);
    // const { id: user_id } = await userServices.findUser(user);
    const { id: issueId } = await issueServices.createIssue({
      title,
      content,
      milestone,
      user,
      status,
    });
    Promise.all([
      await issueServices.createIssueAssignees({
        assignees,
        issueId,
      }),
      await issueServices.createIssueLabels({
        labels,
        issueId,
      }),
    ]);

    res.json({
      message: '새로운 이슈 생성 성공',
      data: issueId,
    });
  } catch (error) {
    next(error);
  }
};

/*
    GET /api/issue/detail/:id
    * 이슈 상세 조회 API
*/
exports.getIssueDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const detail = await issueServices.getIssueDetail(id);

    res.json({
      message: '이슈 상세 조회 성공',
      data: detail,
    });
  } catch (error) {
    next(error);
  }
};
