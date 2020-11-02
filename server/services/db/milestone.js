const { Milestone } = require('../../models');

exports.selectMilestone = async () => {
  const milestones = await Milestone.findAll({
    attributes: ['id', 'status', 'title', 'due_date', 'desc'],
  });

  return milestones;
};
