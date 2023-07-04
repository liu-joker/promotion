import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router

Vue.use(Router)


//Vue全局使用Router

export default new Router({
  // mode:"history",
  // base:process.env.BASE_URL,
  // base:'/promotion/',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  },

  routes: [ //配置路由，这里是个数组
    { //每一个链接都是一个对象
      path: '/', //链接路径
      redirect: '/index',
      component: () => import('@/view/proView/index.vue'),
    },
    { //每一个链接都是一个对象
      path: '/index', //链接路径
      name: 'index',
      component: () => import('@/view/proView/index.vue'),
    },
    {
      path: '/download-page',
      name: 'download-page',
      component: () => import('@/view/proView/download-page.vue'),
    },
    {
      path: '/charge-page',
      name: 'charge-page',
  
      component: () => import('@/view/proView/charge-page.vue'),
    },
    {
      path: '/cash-page',
      name: 'cash-page',
      component: () => import('@/view/proView/cash-page.vue'),
    },
    {
      path: '/agentAdmin',
      name: 'agentAdmin',
      component: () => import('@/view/proView/agentAdmin.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/view/pages/privacy.vue'),
    },

   
  ],
  
})
