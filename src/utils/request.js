// 使用此模块需要配置loading库
import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import Vue from 'vue';

//请求时loading配置
var loading;

function startLoading() {
  loading = Vue.prototype.$loading({
    lock: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.5)'
  });
}

function endLoading() {
  if (!loading) {
    return;
  }
  loading.close();
}
var needLoadingRequestCount = 0;

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

function tryHideFullScreenLoading() {
  // 对请求过快时，loading断开的适配
  setTimeout(() => {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
      endLoading();
    }
  },500)
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // showFullScreenLoading();
    // do something before request is sent
    return config
  },
  error => {
    // tryHideFullScreenLoading();
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // tryHideFullScreenLoading();
    if (res.code === 10000 || res.status === 10000) {
      return res.data;
    } else if (res.code !== 20000) {
      // Message({
      //   message: res.message || res.msg || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      alert(res.message || res.msg || 'Error');
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        var r = window.confirm('You have been logged out, you can cancel to stay on this page, or log in again,');
        if (r == true) {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        }
        // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //   confirmButtonText: 'Re-Login',
        //   cancelButtonText: 'Cancel',
        //   type: 'warning'
        // }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        // })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res;
    }
  },
  error => {
    // tryHideFullScreenLoading();
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    alert(error.message);
    return Promise.reject(error)
  }
)

export default service
