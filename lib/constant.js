/**
 * Created by zdsoft on 14-6-12.
 */
var Constant = {
  /*------------------路由器------------------*/
  ROUTE_HOME: '/',
  ROUTE_ERROR_404: '/404',
  ROUTE_ERROR_500: '/500',
  ROUTE_LOCK_SCREEN: '/lock-screen',
  ROUTE_SIGN_IN: '/signin',
  ROUTE_SIGN_UP: '/signup',



  /*------------------控制器------------------*/
  CTRL_APP: 'AppCtrl',
  //首页
  CTRL_HOME: 'HomeCtrl',

  //系统
  CTRL_SYSTEM: 'systemCtrl',
  //错误控制
  CTRL_ERROR: 'errorCtrl',
  CTRL_ERROR_404: 'error404Ctrl',
  CTRL_ERROR_500: 'error500Ctrl',
  //锁屏
  CTRL_LOCK_SCREEN: 'lockScreenCtrl',
  //登录
  CTRL_SIGN_IN: 'signInCtrl',
  //注册
  CTRL_SIGN_UP: 'signUpCtrl',



  //指令
  DIRECTIVE : 'app.directive',
  DIT_NAV : 'ditNav',//首页导航栏
  DIT_HEADER: 'ditHeader',//首页头部



  /*------------------Page模板------------------*/
  TPL_SYSTEM_HOME: 'views/system/home.html',
  TPL_SYSTEM_404: 'views/system/404.html',
  TPL_SYSTEM_500: 'views/system/500.html',
  TPL_SYSTEM_LOCK_SCREEN: 'views/system/lock-screen.html',//锁屏
  TPL_SYSTEM_SIGN_IN: 'views/system/sign-in.html'

};