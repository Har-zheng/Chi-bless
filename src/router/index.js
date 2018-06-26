import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

import home from '@/components/home'//首页

import information from '@/components/information'//更多信息

import collection from '@/components/my_collection' //我的收藏

import entrustment from '@/components/entrustment' //委托查找

import immediate from '@/components/immediate' //立即委托


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',redirect: 'login'},
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name:'home',
      component: home
    },
    {
      path: '/information',
      name:'information',
      component: information 
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/entrustment',
      name: 'entrustment',
      component: entrustment
    },
    {
      path: '/immediate',
      name: 'immediate',
      component: immediate
    }
  ]
})
