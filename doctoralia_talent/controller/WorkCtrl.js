(function(){
  "use strict";

  //create module
  angular.module('draliaTalent').controller('WorkCtrl', ['$scope', '$location', 'LoginService', 'UserService', function ($scope, $location, LoginService, UserService) {
      
      $scope.teams =  UserService.getTeams();
      console.log($scope.teams)

      $scope.selectedTeam = null;
      $scope.selectedMember = null;

      $scope.number = 8;
      $scope.getNumber = function(number) {
        return new Array(number);
      }

  }]);

})();
