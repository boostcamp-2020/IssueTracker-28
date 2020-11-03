const { Label } = require('../../models');

exports.selectLabel = async () => {
  const labels = await Label.findAll({
    attributes: ['id', 'name', 'desc', 'color'],
  });

  return labels;
};
