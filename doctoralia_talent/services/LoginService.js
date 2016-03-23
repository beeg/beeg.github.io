(function(){
  "use strict";

  //create module
  angular.module('draliaTalent').factory('LoginService', ['$q', '$cookies', function ($q, $cookies) {
      
      var is_authenticated = false;

      return {
        login : function(user, password)  {
          var deferred = $q.defer();

          if(!is_authenticated)  {
            is_authenticated = true;
            $cookies.put('draliaAuth', true)
            deferred.resolve();
          } 

          return deferred.promise;
        },
        isAuthenticated : function()  {
          return (is_authenticated || $cookies.get('draliaAuth') ? true : false)
        }

      }
  }]);

})();
