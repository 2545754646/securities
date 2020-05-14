// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import Axios from "axios"
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element.css'
import echarts from 'echarts'
import './assets/js/kline.js'
import './assets/js/tempData.js'
import './assets/js/jquery.min.js'
import qs from 'qs'
Vue.use(ElementUI);

Vue.prototype.$axios = Axios
Vue.prototype.$echarts = echarts;
//Axios.defaults.baseURL = 'http://mgbapi.mulan188.com';
Vue.config.productionTip = false

//解决页面不能跳转
import VueRouter from 'vue-router';
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 添加请求拦截器  
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么  
  //判断是否存在token，如果存在将每个页面header都添加token  
  if (store.state.token) {
    // config.headers.common['Authentication-Token'] = store.state.token
    config.headers.Authorization =  store.state.token;
  }

  return config;
}, error => {
  // 对请求错误做些什么  
  return Promise.reject(error);
});

// http response 拦截器  
Axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面  
          })
      }
    }
    return Promise.reject(error.response.data)
  });  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
