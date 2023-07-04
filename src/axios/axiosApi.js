import request from './request'
class axiosApi {
    //   充值
  static getToken(userId,secret) {
    return request({
      url: '/getToken?userId='+userId+'&secret='+secret,
      method: 'get',
      data: {
     
      }
    })
  }
  static getRechargeRatio(type) {
    return request({
      url: '/getRechargeRatio?type='+type,
      method: 'get',
      data: {
       
      }
    })
  }
//   充值
  static recharge(pid) {
    return request({
      url: '/recharge',
      method: 'post',
      data: {
       pid
      }
    })
  }
//   代理后台
  static userData(time) {
    return request({
      url: '/userData?time='+time,
      method: 'get',
      data: {
     
      }
    })
  }

}
export default axiosApi
