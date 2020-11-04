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
