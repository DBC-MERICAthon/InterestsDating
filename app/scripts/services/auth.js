'use strict';

angular.module('interestDatingApp')
  .service('auth', function ($http, $state, API_URL, authToken) {
    var authSuccess = function(res) {
      authToken.setToken(res.token);
      $state.go('main');
    };
    this.login = function(user) {
      // return $http.post(API_URL + 'login', user).success(function(res) {
      //   authSuccess(res);
      // });

  console.log(user)
      return $.ajax({
        url: API_URL + 'login',
        method: "POST",
        dataType: 'json',
        data: {user: user},
        crossDomain: true,
      }).success(function(res) {
        debugger;
        // authSuccess(res);
      });
    };
    this.register = function(user) {
      return $http.post(API_URL + 'register', user).success(function(res) {
        authSuccess(res);
      });
    }
  });
