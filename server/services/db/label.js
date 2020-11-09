const { Label } = require('../../models');

exports.selectLabel = async () => {
  const labels = await Label.findAll({
    attributes: ['id', 'name', 'desc', 'color'],
    raw: true,
  });

  return labels;
};

exports.insertLabel = async ({ name, desc, color }) => {
  const label = await Label.create({
    name,
    desc,
    color,
    raw: true,
  });

  return label;
};

exports.updateLabel = async ({ id, name, desc, color }) => {
  const result = await Label.update(
    {
      name,
      desc,
      color,
      raw: true,
    },
    {
      where: {
        id
      }
    });

  return result;
};

exports.deleteLabel = async ({ id }) => {
  const result = await Label.destroy({
    where: {
      id
    }
  });

  return result;
};