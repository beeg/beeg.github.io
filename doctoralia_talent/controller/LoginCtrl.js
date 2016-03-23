(function(){
  "use strict";

  //create module
  angular.module('draliaTalent').controller('LoginCtrl', ['$scope', '$location', 'LoginService', function ($scope, $location, LoginService) {
      
      $scope.user = {};      

      $scope.login = function()	{
      	LoginService.login($scope.user.email, $scope.user.password).then(function()	{
      		$location.url('/home');
      	}, function(error)	{
      		//NOTHING
      	});
      }
  }]);

})();
