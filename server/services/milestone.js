const db = require('./db/milestone');

exports.getMilestones = async () => {
  const results = await db.selectMilestone();
  let milestoneCnt = [0, 0];
  const milestones = [];
  for (let result of results) {
    let status = result.status === 0 ? 'open' : 'closed';
    milestoneCnt[result.status] += 1;
    milestones.push({ ...result.dataValues, status });
  }
  return { milestoneCnt, milestones };
};

exports.findMilestone = async (title) => {
  const results = await db.selectMilestoneID(title);
  return results;
};

exports.createMilestone = async (params) => {
  const results = await db.insertMilestone(params);
  return results;
};

exports.updateMilestone = async (params) => {
  const results = await db.updateMilestone(params);
  return results;
};

exports.deleteMilestone = async (params) => {
  const results = await db.deleteMilestone(params);
  return results;
};