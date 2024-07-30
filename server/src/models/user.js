const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_name'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'email'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'password'
  }
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = User;