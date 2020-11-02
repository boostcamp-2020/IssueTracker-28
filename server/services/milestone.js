const db = require('./db/milestone');

exports.getMilestones = async () => {
  const results = await db.selectMilestone();
  const data = [];
  for (const result of results) {
    const status = result.status === 0 ? 'open' : 'closed';
    data.push({ ...result.dataValues, status });
  }
  return data;
};
