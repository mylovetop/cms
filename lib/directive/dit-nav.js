/**
 * Created by zdsoft on 14-6-12.
 * 首页导航栏
 */
angular
.module(Constant.DIRECTIVE)
.directive(Constant.DIT_NAV, function(){
    var linkFun = function($scope, element, attrs){

      var cssSelected = Common.getNavSelectedCss(1),
        cssSelectedNo = Common.getNavSelectedCss(0);

      //父导航点击事件
      $scope.ditNavClick = function(item){

        if(!item.hasChild){
          $scope.ditNavObj.forEach(function(v, i, a){
            if(v.id == item.id){
              v.cssSelected = cssSelected;
            }else{
              v.cssSelected = cssSelectedNo;
              v.items.forEach(function(iv, ii, ia){
                iv.cssSelected = cssSelectedNo;
              });
              v.hasExpand = false;
            };

          });
          $scope.$apply();
        }else{
          item.hasExpand = !item.hasExpand;
        };

      };

      //子导航点击事件
      $scope.ditNavItemClick = function(it, parent, $event){
        $event.stopPropagation();
        $scope.ditNavObj.forEach(function(v, i, a){
          if(v.id == parent.id){
            v.items.forEach(function(vv, ii, aa){
              if(vv.id == it.id){
                vv.cssSelected = cssSelected;
              }else{
                vv.cssSelected = cssSelectedNo;
              };
            });
          }else{
            v.cssSelected = cssSelectedNo;
          };
        });
        $scope.$apply();

      };
    };

    return {
      restrict: 'E',
      templateUrl: 'views/directive/dit-nav.html',
      replace: true,
      scope:{
        ditNavObj: '=ngModel'
      },
      link: linkFun
    }
});