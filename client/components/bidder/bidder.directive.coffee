'use strict'

angular.module 'bidderApp'
.directive 'bidder', ->
  templateUrl: 'components/bidder/bidder.html'
  restrict: 'EA'
  scope:
    bidder:'='
  link: (scope, element, attrs) ->

