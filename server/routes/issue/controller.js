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
    UPDATE /api/issue/status
    * 이슈 상태 변경 API
*/
exports.updateIssueStatus = async (req, res, next) => {
  const { ids, status } = req.body;
  console.log(req.body);
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
    UPDATE /api/issue/content
    * 이슈 내용 변경 API
*/
exports.updateIssueContent = async (req, res, next) => {
  const { ids, content } = req.body;
  try {
    const result = await issueServices.updateIssueContent(ids, content);
    if (result) {
      res.json({
        message: '이슈 내용 수정 성공',
      });
    } else {
      res.status(400).json({
        message: '이슈 내용 수정 실패',
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

/*
    PUT /api/issue/title/:id
    {
      title: 'test1'
    }
    * 이슈 제목 수정 API
*/
exports.updateIssueTitle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const result = await issueServices.updateIssueTitle(id, title);

    if (result) {
      res.status(200).json({
        message: '이슈 제목 수정 성공',
      });
    } else {
      res.status(400).json({
        message: '이슈 제목 수정 실패',
      });
    }
  } catch (error) {
    next(error);
  }
};

/*
    PUT /api/issue/assignee/:id
    {
      assignee: 1
      flag: 0 or 1 -> 0이면 삭제, 1이면 추가
    }
    * 이슈 Assignee 수정 API
*/
exports.updateIssueAssignee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { assignee, flag } = req.body;

    const result = flag
      ? await issueServices.addIssueAssignee(id, assignee)
      : await issueServices.deleteIssueAssignee(id, assignee);

    if (result) {
      res.status(200).json({
        message: '이슈 Assignees 수정 성공',
      });
    } else {
      res.status(400).json({
        message: '이슈 Assignees 수정 실패',
      });
    }
  } catch (error) {
    next(error);
  }
};

/*
    PUT /api/issue/label/:id
    {
      label: 1
      flag: 0 or 1 -> 0이면 삭제, 1이면 추가
    }
    * 이슈 Label 수정 API
*/
exports.updateIssueLabel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { label, flag } = req.body;

    const result = flag
      ? await issueServices.addIssueLabel(id, label)
      : await issueServices.deleteIssueLabel(id, label);

    if (result) {
      res.status(200).json({
        message: '이슈 Labels 수정 성공',
      });
    } else {
      res.status(400).json({
        message: '이슈 Labels 수정 실패',
      });
    }
  } catch (error) {
    next(error);
  }
};

/*
    PUT /api/issue/milestone/:id
    {
      milestone: 1
      flag: 0 or 1 -> 0이면 삭제, 1이면 추가
    }
    * 이슈 Milestone 수정 API
*/
exports.updateIssueMilestone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { milestone, flag } = req.body;

    const result = flag
      ? await issueServices.addIssueMilestone(id, milestone)
      : await issueServices.deleteIssueMilestone(id);

    if (result) {
      res.status(200).json({
        message: '이슈 Milestone 수정 성공',
      });
    } else {
      res.status(400).json({
        message: '이슈 Milestone 수정 실패',
      });
    }
  } catch (error) {
    next(error);
  }
};
