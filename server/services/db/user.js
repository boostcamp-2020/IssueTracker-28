const { User } = require('../../models');

exports.selectUser = async (userId) => {
  const results = await User.findOne({
    raw: true,
    where: {
      userId,
    },
  });

  return results;
};

exports.selectUsers = async () => {
  const results = await User.findAll({
    attributes: ['id', 'userId'],
    raw: true,
  });

  return results;
};

exports.insertUser = async (params) => {
  const results = await User.create({
    raw: true,
    userId: params.userId,
    password: params.password,
  });
  return results;
};
