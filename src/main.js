/**
* Date: 2020-09-19 09:50:42
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 16:37:09
* Description: please write description
*/
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/permission'
import plugins from '@/utils/plugins';
import './utils/error-log'
import * as filters from './filters'
import './directive';
import '@/styles/index.css' // global css

Vue.config.productionTip = false

Vue.use(plugins);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
