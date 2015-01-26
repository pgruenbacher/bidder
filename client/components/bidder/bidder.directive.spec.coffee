'use strict'

describe 'Directive: bidder', ->

  # load the directive's module and view
  beforeEach module 'bidderApp'
  beforeEach module 'components/bidder/bidder.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<bidder></bidder>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the bidder directive'

