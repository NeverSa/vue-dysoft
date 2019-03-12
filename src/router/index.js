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
          path: 'FrienfShipLinks',
          name: 'FrienfShipLinks',
          component: resolve => require(['@/components/AppInterface/FrienfShipLinks'], resolve),
        },
        {
          path: 'ApiMaintain',
          name: 'ApiMaintain',
          component: resolve => require(['@/components/AppInterface/ApiMaintain'], resolve),
        },
        {
          path: 'ApiMaintainDetail',
          name: 'ApiMaintainDetail',
          component: resolve => require(['@/components/AppInterface/ApiMaintainDetail'], resolve),
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
