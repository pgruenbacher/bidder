'use strict';

module.exports = function(sequelize, DataTypes) {
  var Bidder = sequelize.define('Bidder', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    expiration: DataTypes.DATE,
    bids: DataTypes.INTEGER
  });
  return Bidder
};
