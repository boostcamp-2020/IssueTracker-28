const db = require('./db/label');

exports.getLabels = async () => {
  const results = await db.selectLabel();
  return results;
};

exports.createLabel = async (params) => {
  const results = await db.insertLabel(params);
  return results;
};

exports.updateLabel = async (params) => {
  const results = await db.updateLabel(params);
  return results;
};

exports.deleteLabel = async (params) => {
  const results = await db.deleteLabel(params);
  return results;
};