const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델정의
db.User = require('./user')(sequelize, Sequelize);
db.Issue = require('./issue')(sequelize, Sequelize);
db.Label = require('./label')(sequelize, Sequelize);
db.Milestone = require('./milestone')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.IssueAssignee = require('./issue-assignee')(sequelize, Sequelize);
db.IssueLabel = require('./issue-label')(sequelize, Sequelize);

// 관계정의 users : issues = 1 : N
db.User.hasMany(db.Issue, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});
db.Issue.belongsTo(db.User, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// 관계정의 milestones : issues = 1 : N
db.Milestone.hasMany(db.Issue, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});
db.Issue.belongsTo(db.Milestone, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// 관계정의 users : issues = M : N
db.User.belongsToMany(db.Issue, { through: db.IssueAssignee });
db.Issue.belongsToMany(db.User, { through: db.IssueAssignee });

// 관계정의 labels : issues = M : N
db.Label.belongsToMany(db.Issue, { through: db.IssueLabel });
db.Issue.belongsToMany(db.Label, { through: db.IssueLabel });

// 관계정의 users : comments = 1 : N
db.User.hasMany(db.Comment, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});
db.Comment.belongsTo(db.User, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// 관계정의 issues : comments = 1 : N
db.Issue.hasMany(db.Comment, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});
db.Comment.belongsTo(db.Issue, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

module.exports = db;
