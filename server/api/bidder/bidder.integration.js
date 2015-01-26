'use strict';

var app = require('../../app');
var request = require('supertest');

describe('Bidder API:', function() {

  describe('GET /api/bidders', function() {
    var bidders;

    beforeEach(function(done) {
      request(app)
        .get('/api/bidders')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          bidders = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      bidders.should.be.instanceOf(Array);
    });

  });

});
