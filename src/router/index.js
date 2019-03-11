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
          name: '友情链接管理',
          component: resolve => require(['@/components/AppInterface/FrienfShipLinks'], resolve),
        },
        {
          path: 'upload',
          name: '上传',
          component: resolve => require(['@/component_pack/uploadImg'], resolve),
        }
      ],
    }
  ]
})
