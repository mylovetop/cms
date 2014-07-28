/**
 * Created by zdsoft on 14-6-12.
 */
var App = angular.module('App',[
  'ngTouch',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',

  Constant.CTRL_HOME,
  Constant.CTRL_ERROR,
  Constant.CTRL_SYSTEM,
  Constant.DIRECTIVE
]);

App.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when(Constant.ROUTE_HOME,{
      controller: Constant.CTRL_HOME,
      templateUrl: Constant.TPL_SYSTEM_HOME
    })
    .when(Constant.ROUTE_ERROR_404,{
      controller: Constant.CTRL_ERROR_404,
      templateUrl: Constant.TPL_SYSTEM_404
    })
    .when(Constant.ROUTE_ERROR_500,{
      controller: Constant.CTRL_ERROR_500,
      templateUrl: Constant.TPL_SYSTEM_500
    })
    .when(Constant.ROUTE_LOCK_SCREEN, {//锁屏
      controller: Constant.CTRL_LOCK_SCREEN,
      templateUrl: Constant.TPL_SYSTEM_LOCK_SCREEN
    })
    .when(Constant.ROUTE_SIGN_IN, {//登录
      controller: Constant.CTRL_SIGN_IN,
      templateUrl: Constant.TPL_SYSTEM_SIGN_IN
    })
    .otherwise({
      redirectTo:Constant.ROUTE_ERROR_404
    });
}]);


App.controller(Constant.CTRL_APP, ['$scope', '$window', '$location', '$rootScope', function($scope, $window, $location, $rootScope){
  $scope.slide =  '';
  $rootScope.back = function(path) {
    console.log('path', path);

    if(typeof path != 'undefined'){
      $location.url(path);
    }else{
      $window.history.back();
    };
  };

  $rootScope.go = function(path){

    $location.url(path);
  };


  $scope.nav = Common.getNav();
  $scope.header = {};
}]);

