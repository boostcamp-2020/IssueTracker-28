const labelServices = require('../../services/label');

/*
    GET /api/label/list
    * 전체 라벨 목록 조회 API
*/
exports.getLabels = async (req, res, next) => {
  try {
    const labels = await labelServices.getLabels();

    res.json({
      message: '전체 라벨 목록 조회 성공',
      data: labels,
    });
  } catch (error) {
    next(error);
  }
};
