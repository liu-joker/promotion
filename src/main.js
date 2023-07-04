import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import axiosApi from './axios/axiosApi'
import './utils/rootRem'
// process.env.base_URL = 'http://www.192.168.2.25/api/'
// axios.defaults.base_URL = 'http://www.192.168.2.25:8201/api/'
Vue.prototype.$axiosApi = axiosApi

import store from './store/store'
// import './style/global.scss'
import './style/promotion.scss'
import ElementUI from 'element-ui';

import {Message,Loading} from 'element-ui'
import VueI18n from 'vue-i18n';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(VueI18n);
Vue.use(ElementUI)

// Vue.use(Message)
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading
import 'animate.css';
Vue.config.productionTip = false
import router from './router/access'


// 导入Swiper的依赖
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
Vue.use(VueAwesomeSwiper)


// /*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  messages: {
    'zh-CN': require('./langs/zh'), // 中文语言包
    'zh-EN': require('./langs/en'), // 英文语言包
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')