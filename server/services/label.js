const db = require('./db/label');

exports.getLabels = async () => {
  const results = await db.selectLabel();

  const data = [];

  for (const result of results) {
    const label = {};
    label.id = result.id;
    label.name = result.name;
    label.desc = result.desc;
    label.color = result.color;

    data.push(label);
  }

  return data;
};
