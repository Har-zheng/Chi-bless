// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'//vue-resource  处理请求


import $ from 'jquery' //引用jquery

import  'bootstrap/dist/css/bootstrap.min.css' //bootstrap框架的引用
import  'bootstrap/dist/js/bootstrap.min.js'



Vue.config.productionTip = false

Vue.use(VueResource) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
