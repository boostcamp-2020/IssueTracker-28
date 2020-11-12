const db = require('./db/milestone');

exports.getMilestones = async () => {
  const results = await db.selectMilestone();
  const milestoneCnt = [0, 0];
  const milestones = [];

  for (const result of results) {
    const status = result.status === 0 ? 'open' : 'closed';
    milestoneCnt[result.status] += 1;
    milestones.push({ ...result.dataValues, status });
  }

  return { milestoneCnt, milestones };
};

exports.createMilestone = async (params) => {
  const result = await db.insertMilestone(params);
  return result;
};

exports.updateMilestone = async (params) => {
  const result = await db.updateMilestone(params);
  return result;
};

exports.deleteMilestone = async (params) => {
  const result = await db.deleteMilestone(params);
  return result;
};
