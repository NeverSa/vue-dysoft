import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      children:[
        {
          path: 'FrienfShipLinks',// 友情链接管理
          name: 'FrienfShipLinks',
          component: resolve => require(['@/components/AppInterface/FrienfShipLinks'], resolve),
        },
        {
          path: 'ApiMaintain',//  接口维护
          name: 'ApiMaintain',
          component: resolve => require(['@/components/AppInterface/ApiMaintain'], resolve),
        },
        {
          path: 'ApiMaintainDetail',//  接口维护详情
          name: 'ApiMaintainDetail',
          component: resolve => require(['@/components/AppInterface/ApiMaintainDetail'], resolve),
        },
        {
          path: 'APIAuditing',//   接口审核
          name: 'APIAuditing',
          component: resolve => require(['@/components/AppInterface/APIAuditing'], resolve),
        },
        {
          path: 'APIAuditingDetail',//   接口审核详情
          name: 'APIAuditingDetail',
          component: resolve => require(['@/components/AppInterface/APIAuditingDetail'], resolve),
        },
        {
          path: 'ReqStatistic',//   接口请求统计
          name: 'ReqStatistic',
          component: resolve => require(['@/components/AppInterface/ReqStatistic'], resolve),
        },
        
        {
          path: 'upload',
          name: 'upload',
          component: resolve => require(['@/component_pack/uploadImg'], resolve),
        }
      ],
    }
  ]
})
