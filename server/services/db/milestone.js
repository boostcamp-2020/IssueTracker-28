const { Milestone, Issue } = require('../../models');

exports.selectMilestone = async () => {
  const milestones = await Milestone.findAll({
    attributes: ['id', 'status', 'title', 'dueDate', 'desc'],
    include: [
      {
        model: Issue,
        attributes: ['id', 'status'],
      },
    ],
  });

  return milestones;
};

exports.insertMilestone = async ({ status, title, dueDate, desc }) => {
  const milestone = await Milestone.create({ status, title, dueDate, desc });
  return milestone;
};

exports.updateMilestone = async ({ id, status, title, dueDate, desc }) => {
  const result = await Milestone.update({ status, title, dueDate, desc }, { where: { id } });
  return result;
};

exports.deleteMilestone = async ({ id }) => {
  const result = await Milestone.destroy({ where: { id } });
  return result;
};
