const milestoneServices = require('../../services/milestone');

/*
    GET /api/issue/list
    * 전체 이슈 목록 조회 API
*/
exports.getMilestones = async (req, res, next) => {
  try {
    const milestones = await milestoneServices.getMilestones();

    res.json({
      message: '전체 마일스톤 목록 조회 성공',
      data: milestones,
    });
  } catch (error) {
    next(error);
  }
};
