const issueServices = require('../../services/issue');
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
    const { title, content, milestone, assignees, labels, user, status } = req.body;
    const { id: userId } = await userServices.findUser(user);
    const { id: issueId } = await issueServices.createIssue({
      title,
      content,
      milestone,
      userId,
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
    res.status(200).json({
      message: '새로운 이슈 생성 성공',
      data: issueId,
    });
  } catch (error) {
    next(error);
  }
};

/*
    UPDATE /api/issue/
    * 이슈 상태 변경 API
*/
exports.updateIssueStatus = async (req, res, next) => {
  const { ids, status } = req.body;
  try {
    const result = await issueServices.updateIssueStatus(ids, status);
    if (result) {
      res.json({
        message: '이슈 상태 수정 성공',
      });
    } else {
      res.status(400).json({
        message: '이슈 상태 수정 실패',
      });
    }
  } catch (err) {
    next(err);
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
