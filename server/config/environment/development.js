'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/test'
  },
  sequelize: {
    database:'bidder',
    username:'postgres',
    password:'stxavier1',
    options: {
      dialect:'postgresql',
      port:5432,
      logging: false,
    }
  },

  seedDB: true
};