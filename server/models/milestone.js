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
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '0: OPEN, 1: CLOSE',
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
