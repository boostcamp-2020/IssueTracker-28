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

exports.insertMilestone = async ({ status, title, due_date, desc }) => {
  const milestone = await Milestone.create({
    status,
    title,
    dueDate: due_date,
    desc,
    raw: true,
  });

  return milestone;
};

exports.updateMilestone = async ({ id, status, title, due_date, desc }) => {
  const result = await Milestone.update(
    {
      status,
      title,
      dueDate: due_date,
      desc,
    },
    {
      where: {
        id: id
      }
    });

  return result;
};

exports.deleteMilestone = async ({ id }) => {
  const result = await Milestone.destroy({
    where: {
      id: id
    }
  });

  return result;
};