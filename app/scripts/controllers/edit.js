angular.module('interestDatingApp')
  .controller('EditCtrl', function ($scope, authToken, $http, $q, API_URL, $state, $location, alert) {
    var user = $http.get(API_URL + 'users/' + authToken.getToken());
    var interests = $http.get(API_URL + 'users/' + authToken.getToken() + '/interests');

    $q.all([user, interests]).then(function(values) {
      $scope.user = values[0].data;
      $scope.interests = values[1].data;
      $scope.gender = $scope.user.gender
      $scope.lookingFor = $scope.user.looking_for
      $scope.ethnicity = $scope.user.ethnicity
      $scope.height = $scope.user.height
      $scope.age = $scope.user.age
      $scope.bio = $scope.user.bio
      $scope.eyeColor = $scope.user.eye_color
      $scope.image_url = $scope.user.user_image
    });

    $scope.update = function() {

      var user = {
        gender: $scope.gender,
        looking_for: $scope.lookingFor,
        ethnicity: $scope.ethnicity,
        height: $scope.height,
        age: $scope.age,
        eye_color: $scope.eyeColor,
        user_image: $scope.image_url,
        bio: $scope.bio
      };

      console.log(user)
      $.ajax({
        method: "POST",
        url: API_URL + "users/" + authToken.getToken(),
        dateType: "json",
        crossDomain: true,
        data: {
          user: user
        }
      }).success(function(){
        $state.go('search');
        alert('success', 'Updated');
      });
    }

    $scope.createInterest = function() {
      $.ajax({
        method: "POST",
        url: API_URL + "users/" + authToken.getToken() + '/interests',
        dateType: "json",
        crossDomain: true,
        data: {
          interest: { name: $scope.interest}
        }
      }).success(function(){
        $state.go('search');
        alert('success', 'Updated');
      });
    }

  });