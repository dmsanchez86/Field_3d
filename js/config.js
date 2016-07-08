var application = angular.module('fieldFootball', []);

application.controller('mainCtrl', function($scope, $window, $http){
  $scope.db = [];
  $scope.dataLocalTeam = [];
  $scope.dataVisitantTeam = [];

  $scope.localPlayers = [];
  $scope.visitantPlayers = [];

  $http.get('js/db.json').success(function(response) {
      $scope.db = response.db;
      console.log($scope.db);

      $scope.dataLocalTeam = $scope.db[0];
      $scope.dataVisitantTeam = $scope.db[1];

      $scope.localPlayers = $scope.dataLocalTeam.players;
      $scope.visitantPlayers = $scope.dataVisitantTeam.players;

      $scope.scoreLocal = 0;
      $scope.scoreVisitant = 0;

      console.log($scope.dataLocalTeam);
      console.log($scope.dataVisitantTeam);
  });

  $scope.changeTeam = function($event, team, ref){
    var $el = angular.element($event.target);

    angular.forEach($scope.db, function(el, i){

      if(el.name.toLowerCase() == team){
        if(ref == "local"){
          if(team == $scope.dataVisitantTeam.name.toLowerCase()){
            return;
          }

          $scope.dataLocalTeam = el;
          $scope.localPlayers = $scope.dataLocalTeam.players;
          $('.settingsLocalTeam .changeTeam ul li:not(.header)').removeClass('active');
        }else{
          if(team == $scope.dataLocalTeam.name.toLowerCase()){
            return;
          }

          $scope.dataVisitantTeam = el;
          $scope.visitantPlayers = $scope.dataVisitantTeam.players;
          $('.settingsVisitantTeam .changeTeam ul li:not(.header)').removeClass('active');
        }

        $el.addClass('active');
      }      
    });
  }

  var toggle = true;

  $scope.toggleScores = function($event){
    var $el = angular.element($event.target);

    if(toggle){
      $el.find('i').removeClass('fa-toggle-off').addClass('fa-toggle-on');
      toggle = false;
    }else{
      $el.find('i').removeClass('fa-toggle-on').addClass('fa-toggle-off');
      toggle = true;
    }

    $('.score').toggleClass('hide');
  }
});