(function(){
  "use strict";

  //create module
  angular.module('draliaTalent').controller('TeamCtrl', ['$scope', '$location', 'LoginService', 'UserService', function ($scope, $location, LoginService, UserService) {
      
      $scope.teams =  UserService.getTeams();
       
      var o = {
        img: 'assets/images/circle.png',
        
      }

      $scope.selectedTeam = $scope.teams[0];
      $scope.selectedMember = $scope.selectedTeam.members[0];

      $scope.number = 8;
      $scope.getNumber = function(number) {
        return new Array(number);
      }

      $scope.selectMember = function(member)  {
        $scope.selectedMember = member;
      }

      $scope.updateMember = function()  {
        $scope.selectedMember = $scope.selectedTeam.members[0];
      }

  }]);

})();
