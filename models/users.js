'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.hasMany(models.orders, {
      foreignKey: 'uid',
    })
  };

  //  sequelize.sync()
  // .then(()=> {
  //   OrderProducts.update({orderId: 1}, {where: {id: 1}});
  //   OrderProducts.update({orderId: 1}, {where: {id: 2}});
  //   OrderProducts.update({orderId: 2}, {where: {id: 3}});
  //   OrderProducts.update({orderId: 3}, {where: {id: 4}});
  //  Users.create({email:"b@b.com"})  
  // });

  // Users.create({email:"c@c.com"})  
  // Users.create({email:"b@b.com"})
  // Users.create({email:"d@d.com"})
  return Users;
};