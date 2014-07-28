/**
 * Created by zdsoft on 14-6-12.
 */
var Common = {
  /**
   * 首页头部
   */
  getHeader: function(){
    return {

    }
  },
  /**
   * 首页导航栏
   */
  getNav: function(){

    var navItemSelected = 'view-nav-item-selected',
      navItemSelectedNo = '';

    var nav = [
      {
        id:1,
        name:'首页',
        hasChild:false,
        cssSelected: navItemSelected,
        hasExpand:false
      },
      {
        id:2,
        name:'工作流',
        hasChild:true,
        hasExpand:false,
        items:[
          {
            id:21,
            name:'工作流一',
            cssSelected: navItemSelectedNo
          },
          {
            id:22,
            name:'工作流二',
            cssSelected: navItemSelectedNo
          },
          {
            id:23,
            name:'工作流三',
            cssSelected: navItemSelectedNo
          }
        ]
      },
      {
        id:3,
        name:'平台',
        hasChild:false,
        cssSelected: navItemSelectedNo,
        hasExpand:false
      },
      {
        id:4,
        name:'关于',
        hasChild:false,
        cssSelected: navItemSelectedNo,
        hasExpand:false
      }
    ];
    return nav;
  },
  /**
   * 获取导航栏选中样式
   * @param type 1 选中， 0 未选中
   * @returns {string}
   */
  getNavSelectedCss: function(type){
    var navItemSelected = 'view-nav-item-selected',
      navItemSelectedNo = '';
    var retVal = navItemSelected;
    if(!type){
      retVal = navItemSelectedNo;
    }

    return retVal;
  }
};