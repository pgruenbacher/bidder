/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var sqldb = require('../sqldb');
var Thing = sqldb.Thing;
var User = sqldb.User;
var Bidder = sqldb.Bidder;



Bidder.sync()
  .then(function(){
    return Bidder.destroy({truncate:true});
  })
  .then(function(){
    var firstDay = new Date();
    var next24 = new Date(firstDay.getTime() + 24 * 60 * 60 * 1000);

    Bidder.bulkCreate([
    {
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    },{
      price:5000,
      expiration: next24,
      bids:0
    }
    ])
  });


Thing.sync()
  .then(function() {
    return Thing.destroy();
  })
  .then(function() {
    Thing.bulkCreate([{
      name : 'Development Tools',
      info : 'Integration with popular tools such as Bower, Grunt, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name : 'Server and Client integration',
      info : 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name : 'Smart Build System',
      info : 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name : 'Modular Structure',
      info : 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name : 'Optimized Build',
      info : 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name : 'Deployment Ready',
      info : 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });

User.sync()
  .then(function() {
    return User.destroy();
  })
  .then(function() {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }])
    .then(function() {
      console.log('finished populating users');
    });
  });
