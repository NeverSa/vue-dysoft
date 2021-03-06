// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import "./assets/Nifty/css/nifty.min.css"
import "@/assets/Nifty/js/nifty.js"
import "@/assets/Nifty/js/demo/nifty-demo.js"
import "@/assets/Nifty/themify-icons/themify-icons.min.css"
import "@/assets/Nifty/magic-check/css/magic-check.min.css"

import "@/assets/ionicons/css/ionicons.min.css"
import "@/assets/css/public.less"

import Utils from "@/lib/Utils"//通用工具类
// 引入样式

import "@/assets/css/public.less"

import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.prototype.$u=Utils;

Vue.config.productionTip = false




  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
  

/* eslint-disable no-new */
