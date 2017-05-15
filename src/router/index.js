import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { auth: false },
      component: resolve => require(['@/views/login'], resolve)
    },
    {
      path: '/main',
      name: 'Main',
      meta: {auth: true},
      component: resolve => require(['@/views/main'], resolve)
    },
    {
      path: '*', //其他页面，强制跳转到登录页面
      redirect: '/'
    }
  ]
})
