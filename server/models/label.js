module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'label', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            desc: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            timestamps: false,
            underscored: true,
        }
    );
};