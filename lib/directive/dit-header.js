/**
 * Created by zdsoft on 14-6-12.
 * 首页导航栏
 */
angular
.module(Constant.DIRECTIVE)
.directive(Constant.DIT_HEADER, function(){
    var linkFun = function($scope, element, attrs){

    };

    return {
      restrict: 'E',
      templateUrl: 'views/directive/dit-header.html',
      replace: true,
      scope:{
        ditNavObj: '=ngModel'
      },
      link: linkFun
    }
});