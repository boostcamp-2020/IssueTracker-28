const db = require('./db/milestone');

exports.getMilestones = async () => {
  const results = await db.selectMilestone();
  return results;
};
