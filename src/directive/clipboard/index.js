/**
* Date: 2020-09-19 12:23:33
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 12:24:00
* Description: please write description
*/
import Clipboard from './clipboard'

const install = function(Vue) {
  Vue.directive('Clipboard', Clipboard)
}

if (window.Vue) {
  window.clipboard = Clipboard
  Vue.use(install); // eslint-disable-line
}

Clipboard.install = install
export default Clipboard

// 使用：v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess"