import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import publics from '@/components/publics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/publics',
      name:'publics',
      component: publics
    }
  ]
})
