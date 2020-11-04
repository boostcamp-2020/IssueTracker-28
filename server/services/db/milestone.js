const { Milestone } = require('../../models');

exports.selectMilestone = async () => {
  const milestones = await Milestone.findAll({
    attributes: ['id', 'status', 'title', 'due_date', 'desc'],
  });
  return milestones;
};
exports.selectMilestoneID = async (title) => {
  const milestones = await Milestone.findOne({
    raw: true,
    where: {
      title: title,
    },
  });
  return milestones;
};
