'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.hasMany(models.Orders, {
      foreignKey: 'uid'
    });
  };
  // sequelize.sync()
  //   .then(() => {
  //     Users.create({ email: 'x@x.com' });
  //     Users.create({ email: 'y@y.com' });
  //     Users.create({ email: 'z@z.com' });
  //   });
  return Users;
};