const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('3_1', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
});
User.sync({ force: true })
  .then(() => console.log('User table created!'))
  .catch(err => console.error(err));

module.exports = User;