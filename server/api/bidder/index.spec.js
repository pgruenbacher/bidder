'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var bidderCtrlStub = {
  index: 'bidderCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var bidderIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './bidder.controller': bidderCtrlStub
});

describe('Bidder API Router:', function() {

  it('should return an express router instance', function() {
    bidderIndex.should.equal(routerStub);
  });

  describe('GET /api/bidders', function() {

    it('should route to bidder.controller.index', function() {
      routerStub.get
                .withArgs('/', 'bidderCtrl.index')
                .should.have.been.calledOnce;
    });

  });

});
