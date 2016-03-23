(function(){
  "use strict";

  //create module
  var app = angular.module('draliaTalent', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function ($routeProvider) {

        var isLogged = ['LoginService', '$location', function (LoginService, $location) {
          if(!LoginService.isAuthenticated()) $location.url('login')
        }];
      
        $routeProvider.when('/', {
            templateUrl: 'doctoralia_talent/partials/login.html',
            controller: 'LoginCtrl'
        })
        .when('/home', {
            templateUrl: 'doctoralia_talent/partials/home.html',
            controller: 'HomeCtrl',
            resolve : { authenticated: isLogged }
        })
        .when('/login', {
            templateUrl: 'doctoralia_talent/partials/login.html',
            controller: 'LoginCtrl',
            resolve : { authenticated: isLogged }
        })
        .when('/intro', {
            templateUrl: 'doctoralia_talent/partials/intro.html',
            controller: 'HomeCtrl',
            resolve : { authenticated: isLogged }
        })
        .when('/team', {
            templateUrl: 'doctoralia_talent/partials/team.html',
            controller: 'TeamCtrl',
            resolve : { authenticated: isLogged }
        })
        .when('/work', {
            templateUrl: 'doctoralia_talent/partials/how_we_work.html',
            controller: 'WorkCtrl',
            resolve : { authenticated: isLogged }
        })
        .when('/benefits', {
            templateUrl: 'doctoralia_talent/partials/benefits.html',
            controller: 'WorkCtrl',
            resolve : { authenticated: isLogged }
        }) 
        .when('/bye', {
            templateUrl: 'doctoralia_talent/partials/goodbye.html',
            controller: 'WorkCtrl',
            resolve : { authenticated: isLogged }
        }) 
        .when('/rsc', {
            templateUrl: 'doctoralia_talent/partials/rsc.html',
            controller: 'WorkCtrl',
            resolve : { authenticated: isLogged }
        }) 
        .otherwise({
            redirectTo: '/'
        }); 
  }])

  .controller('HomeCtrl', ['$scope', 'LoginService',
   function ($scope, LoginService) {
      $scope.LoginService = LoginService;
  }]);

})();
