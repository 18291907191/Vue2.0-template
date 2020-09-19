/**
* Date: 2020-09-19 11:55:33
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 12:14:43
* Description: please write description
*/
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = new Vuex.Store({
  modules: {
    ...modules,
  },
  getters
})

export default store
