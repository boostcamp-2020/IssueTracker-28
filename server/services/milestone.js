const db = require('./db/milestone');

exports.getMilestones = async () => {
  const results = await db.selectMilestone();
  let openMilestone = 0;
  let closedMilestone = 0;
  let status = '';
  const data = [];
  for (const result of results) {
    if (result.status) {
      status = 'open';
      openMilestone += 1;
    } else {
      status = 'closed';
      closedMilestone += 1;
    }
    data.push({ ...result.dataValues, status });
  }
  return { data, openMilestone, closedMilestone };
};
