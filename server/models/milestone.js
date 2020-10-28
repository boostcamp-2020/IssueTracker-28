module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'milestone',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      openIssueCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      closeIssueCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
