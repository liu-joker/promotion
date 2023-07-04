import Cookies from 'js-cookie'
export const TOKEN_KEY = 'apiToken'
export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires:  7 })
}
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)  
    if (token) return token
    else return false
}
export const setUrl = (url) => {
    Cookies.set('qr_code', url, { expires:  7 })
}
export const getUrl = () => {
    const qr_code = Cookies.get('qr_code')  
    if (qr_code) return qr_code
    else return false
}
 // 除以100保留两位小数点
 export const divide=(str)=> {
    let floatVal = parseFloat(str);
    if (isNaN(floatVal )) {
      return 0;
    }
    floatVal = Math.round(str * 100) / 10000;
    let strVal = floatVal .toString();
    let searchVal = strVal.indexOf('.');
    if (searchVal < 0) {
      searchVal = strVal.length;
      strVal += '.';
    }
    while (strVal.length <= searchVal + 2) {
      strVal += '0';
    }
    return parseFloat(strVal);
  }
  // 乘以100保留两位小数点
  export const multiply=(str) =>{
    let floatVal = parseFloat(str);
    if (isNaN(floatVal)) {
      return 0;
    }
    floatVal = Math.round(str * 10000) / 100;
    let strVal = floatVal.toString();
    let searchVal = strVal.indexOf('.');
    if (searchVal < 0) {
      searchVal = strVal.length;
      strVal += '.';
    }
    while (strVal.length <= searchVal + 2) {
      strVal += '0';
    }
    return parseFloat(strVal);
  }