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
  //   Products.create({name: 'CAFÉ AMERICANO', price: 5});
  //   Products.create({name: 'CAFÉ COM LEITE', price: 7});
  //   Products.create({name: 'MISTO QUENTE', price: 10});
  //   Products.create({name: 'SUCO NATURAL', price: 7});
  //   Products.create({name: 'HAMBÚRGER SIMPLES', price: 10});
  //   Products.create({name: 'HAMBÚRGER DUPLO', price: 15});
  //   Products.create({name: 'BATATA', price: 5});
  //   Products.create({name: 'ANÉIS DE CEBOLA', price: 5});
  //   Products.create({name: 'ÁGUA 500', price: 5});
  //   Products.create({name: 'ÁGUA 750', price: 7});
  //   Products.create({name: 'REFRIGERANTE 500ML', price: 7});
  //   Products.create({name: 'REFRIGERANTE 750ML', price: 10});
  // });
  return Products;
};