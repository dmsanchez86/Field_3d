var application = angular.module('fieldFootball', []);

application.controller('mainCtrl', function($scope, $window, $http){
  $scope.db = [];
  $scope.localTeam = [];
  $scope.visitantTeam = [];

  // $http.get('js/db.json').success(function(response) {
  //     $scope.db = response.db;
  //     console.log($scope.db);
  //     $scope.localTeam = $scope.db[0];
  //     console.log($scope.localTeam);
  // });
});