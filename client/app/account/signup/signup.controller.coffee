'use strict'

angular.module 'bidderApp'
.controller 'SignupCtrl', ($scope, Auth, $state, $window) ->
  $scope.user = {}
  $scope.errors = {}
  $scope.register = (form) ->
    $scope.submitted = true

    if form.$valid
      # Account created, redirect to home
      Auth.createUser
        name: $scope.user.name
        email: $scope.user.email
        password: $scope.user.password

      .then ->
        $state.go 'main'

      .catch (err) ->
        err = err.data
        $scope.errors = {}

        # Update validity of form fields that match the sequelize errors
        if err.name
          angular.forEach err.fields, (field) ->
            form[field].$setValidity 'mongoose', false
            $scope.errors[field] = err.message

  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider
