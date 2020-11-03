const db = require('./db/milestone');

exports.getMilestones = async () => {
  const results = await db.selectMilestone();
  let milestoneCnt = [0, 0];
  const milestones = [];
  for (const result of results) {
    let status = result.status === 0 ? 'open' : 'closed';
    milestoneCnt[result.status] += 1;
    milestones.push({ ...result.dataValues, status });
  }
  return { milestoneCnt, milestones };
};
