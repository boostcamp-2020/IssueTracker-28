module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'issue_label',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
