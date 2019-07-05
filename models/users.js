'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Orders, {
      foreignKey: 'uid'
    });
  };
  return Users;
};