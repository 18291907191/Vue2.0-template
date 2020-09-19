/**
* Date: 2020-09-19 11:45:10
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 11:48:18
* Description: please write description
*/
// import * as http from './http';
import moment from 'moment';
import ikj_oss from '@/utils/ali-oss'
import * as http from './request';

const install = (Vue, opts = {}) => {
  if (install.installed) return;
  Vue.prototype.$http = http;
  Vue.prototype.$oss = ikj_oss
  Vue.prototype.$moment = moment;
}

export default install
