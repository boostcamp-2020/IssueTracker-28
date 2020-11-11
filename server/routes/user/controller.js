const userServices = require('../../services/user');

/*
    GET /api/user/list
    * 전체 사용자 목록 조회 API
*/
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userServices.getUsers();

    res.json({
      message: '전체 사용자 목록 조회 성공',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/*
    GET /api/user/:id
    * 사용자 조회 API
*/
exports.getUser = async (req, res, next) => {
  try {
    const user = await userServices.getUser();

    res.json({
      message: '전체 사용자 목록 조회 성공',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
