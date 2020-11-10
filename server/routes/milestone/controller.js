const milestoneServices = require('../../services/milestone');

/*
    GET /api/milestone/list
    * 전체 마일스톤 목록 조회 API
*/
exports.getMilestones = async (req, res, next) => {
  try {
    const data = await milestoneServices.getMilestones();
    res.json({
      message: '전체 마일스톤 목록 조회 성공',
      data,
    });
  } catch (error) {
    next(error);
  }
};

/*
    POST /api/milestone
    * 새로운 마일스톤 생성 API
*/
exports.createMilestone = async (req, res, next) => {
  try {
    const { status, title, due_date, desc } = req.body;

    const milestone = await milestoneServices.createMilestone({ status, title, due_date, desc });

    res.json({
      message: '새로운 마일스톤 생성 성공',
      data: milestone
    });

  } catch (error) {
    next(error);
  }
};

/*
    PUT /api/milestone/:id
    * 마일스톤 수정 API
*/
exports.updateMilestone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, title, due_date, desc } = req.body;

    const result = await milestoneServices.updateMilestone({ id, status, title, due_date, desc });

    if (result[0] === 1) {
      res.json({
        message: '마일스톤 수정 성공',
        data: result  // [affected rows 개수, 바뀐 마일스톤 element]
      });
    }
    res.status(400).json({
      message: '마일스톤 수정 실패',
      data: result
    });

  } catch (error) {
    next(error);
  }
};

/*
    DELETE /api/label/:id
    * 마일스톤 삭제 API
*/
exports.deleteMilestone = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await milestoneServices.deleteMilestone({ id });

    if (result === 1) {
      res.json({
        message: '마일스톤 삭제 성공',
        data: result // affected rows 개수
      });
    }
    res.status(400).json({
      message: '마일스톤 삭제 실패',
      data: result
    });

  } catch (error) {
    next(error);
  }
};