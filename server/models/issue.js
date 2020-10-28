module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'issue',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      milestoneId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '0: OPEN, 1: CLOSE',
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
};
