'use strict'

angular.module 'bidderApp'
.controller 'MainCtrl', ($scope, $http, socket,$window,bidders) ->
  $scope.awesomeThings = []
  $scope.bidders=bidders
  $http.get('/api/things').success (awesomeThings) ->
    $scope.awesomeThings = awesomeThings
    socket.syncUpdates 'thing', $scope.awesomeThings

  $scope.addThing = ->
    return if $scope.newThing is ''
    $http.post '/api/things',
      name: $scope.newThing

    $scope.newThing = ''

  $scope.deleteThing = (thing) ->
    $http.delete '/api/things/' + thing._id

  $scope.$on '$destroy', ->
    socket.unsyncUpdates 'thing'


  $scope.login=()->
