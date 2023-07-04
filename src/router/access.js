import router from './index'

import {getToken} from '../utils/tool'

router.beforeEach((to, from, next) => {

    const token = getToken()
   
    if (!token && to.name != 'index') {
      // 未登录且要跳转的页面不是登录页
      next({
        name: 'index' // 跳转到登录页
      })
    } else if (!token && to.name === 'index') {
      console.log('no token LOGIN_PAGE_NAME')
      // 未登陆且要跳转的页面是登录页
      next() // 跳转
    } 
    else{
        console.log('token true')
      next()
    }
   
  })

  export default router