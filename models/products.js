'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts, {foreignKey:'productId'})
  };

  // sequelize.sync()
  // .then(() => {
  //   Products.create({name: 'CAFÉ AMERICANO', price:});
  //   Products.create({name: 'CAFÉ CO', price:});
  //   Products.create({name: 'MISTO', price:});
  //   Products.create({name: 'SUCO NATURAL', price:});
  //   Products.create({name: 'HAMBÚRGER', price:});
  //   Products.create()({name: 'BATATA', price:});
  //   Products.create()({name: 'ANÉIS DE', price:});
  //   Products.create()({name: 'ÁGUA 500', price:});
  //   Products.create()({name: 'ÁGUA 750', price:});
  //   Products.create()({name: 'REFRIGERANTE', price:});
  //   Products.create()({name: 'REFRIGERANTE', price:});
  // });
  return Products;
};