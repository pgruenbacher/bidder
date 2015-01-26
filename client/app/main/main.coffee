'use strict'

angular.module 'bidderApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'main',
    url: '/'
    templateUrl: 'app/main/main.html'
    controller: 'MainCtrl'
    resolve:
      bidders:($http)->
        $http.get '/api/bidders'
        .then (r)->
          console.log r
          return r.data
