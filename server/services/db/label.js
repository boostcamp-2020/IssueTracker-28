const { Label } = require('../../models');

exports.selectLabel = async () => {
  const labels = await Label.findAll({
    attributes: ['id', 'name', 'desc', 'color'],
    raw: true,
  });

  return labels;
};

exports.insertLabel = async ({ name, desc, color }) => {
  const labels = await Label.create({
    name,
    desc,
    color,
    raw: true,
  });

  return labels;
};
