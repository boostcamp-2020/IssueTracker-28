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

/*
    POST /api/label
    * 새로운 라벨 생성 API
*/
exports.createLabel = async (req, res, next) => {
  try {
    const { name, desc, color } = req.body;

    const labels = await labelServices.createLabel({ name, desc, color });

    res.json({
      message: '새로운 라벨 생성 성공',
      data: labels
    });

  } catch (error) {
    next(error);
  }
};

