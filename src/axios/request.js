import axios from 'axios'
import qs from 'qs'
import {
  Message,Loading
} from 'element-ui'
// import store from '../store'
import {getToken,setToken} from '../utils/tool'

// let loading //定义loading变量

function startLoading() { //使用Element loading-start 方法
//   store.dispatch('SetLoading', true)
   Loading.service();
}

function endLoading() { //使用Element loading-close 方法
//   store.dispatch('SetLoading', false)
 let loadingInstance = Loading.service();
  loadingInstance.close();
}
//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
// let needLoadingRequestCount = 0
export function showFullScreenLoading() {
  startLoading()

  // if (needLoadingRequestCount === 0) {
    
  // }
  // needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  endLoading()
  // if (needLoadingRequestCount <= 0) return
  // needLoadingRequestCount--
  // if (needLoadingRequestCount === 0) {
   
  // }
}

// 创建axios实例
const service = axios.create({
// baseUrl: baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro,
  // baseURL: 'http://192.168.2.25:8201/api/', // api的base_url
  baseURL:'https://www.luckylami.com/v1.0/api/',
  timeout: 60000 // 请求超时时间
})

// request拦截器   请求之前\
service.interceptors.request.use(config => {
  const headers = config.headers["Content-Type"]

  if (headers == undefined || headers.indexOf("application/x-www-form-urlencoded") != -1) {
    config.data = qs.stringify(config.data);
    // console.log('config.data',config.data)
  }


  if (config.url.indexOf("/getToken") == -1) {
    config.headers['apiToken'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // fewconfig.headers['token'] ='4d4af46sa4f89e4af5d1s5a4g8reaffe54a4f89e'
  }
  showFullScreenLoading()
  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    
    tryHideFullScreenLoading()
    if(res.code!=200){
      // if(res.code == '777'){
        Message({
          message: 'token失效,请重新登录',
          duration: 5 * 1000
        })
        setTimeout(()=>{
          setToken('')
          location.reload()
        },1500)
       
      // }else{
      //   Message({
      //     message: res.message,
      //     duration: 5 * 1000
      //    })
      // }
      
    }
    return res
    
  
  },
  error => {
    const originalRequest = error.config;
    tryHideFullScreenLoading()
    // if (error.request.status == '401') {
    //   console.log("登陆超时")
    //   console.log(error)
    //   store.dispatch('FedLogOut').then(() => {
    //     Message({
    //       message: '登陆超时，请重新登陆！',
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //     setTimeout(() => {
    //       location.reload()
    //     }, 2000)
    //   })
    // }
    if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1 && !originalRequest._retry) {
      error.message = "请求超时！"
    }
    console.log('err' + error) // for debug
    Message({
      message: error.message,
    
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
