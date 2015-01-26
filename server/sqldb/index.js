/**
 * Sequelize initialization module
 */

'use strict';

var path = require('path');
var config = require('../config/environment');

var Sequelize = require('sequelize');

var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password, config.sequelize.options)
};

db.Thing = db.sequelize.import(path.join(
  config.root,
  'server',
  'api',
  'thing',
  'thing.model'
));

db.User = db.sequelize.import(path.join(
  config.root,
  'server',
  'api',
  'user',
  'user.model'
));

// Insert models below
db.Bidder = db.sequelize.import(path.join(
  config.root,
  'server',
  'api',
  'bidder',
  'bidder.model'
));

db.Bidder.belongsTo(db.User,{as:'BidItem'});
db.User.hasMany(db.Bidder,{as:'Bidder'});

module.exports = db;
