/**
* Date: 2020-09-19 12:32:07
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 16:56:03
* Description: please write description
*/
import Vue from 'vue';
function focus(data) {
  if (data.tagName === 'INPUT') {
    data.focus()
  } else {
    data.querySelector('input').focus();
  }
}
Vue.directive('focus', {
  bind:function(el){
    focus(el);
  },
  updated:function(el){
    focus(el);
  },
  inserted:function(el){
    focus(el);
  },
})