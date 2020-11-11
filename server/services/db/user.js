const { User } = require('../../models');

exports.selectUser = async (id) => {
  const results = await User.findOne({
    attributes: ['id', 'userId', 'profileImg'],
    raw: true,
    where: {
      id,
    },
  });

  return results;
};

exports.selectUsers = async () => {
  const results = await User.findAll({
    attributes: ['id', 'userId', 'profileImg'],
    raw: true,
  });

  return results;
};

exports.insertUser = async (params) => {
  const results = await User.create({
    raw: true,
    userId: params.userId,
    password: params.password,
    profileImg: params.profileImg
  });
  return results;
};
