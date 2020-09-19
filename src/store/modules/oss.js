/**
* Date: 2020-09-19 11:58:30
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 17:00:26
* Description: please write description
*/
import {getOSS} from '@/api/oss';
const state = {
  oss: undefined
}

const mutations = {
  REST_OSS: (state, oss) => {
    state.oss = oss
  }
}

const actions = {
  // 获取oss配置
  getOssInfo({ commit }, params) {
    return new Promise((resolve,reject) => {
      getOSS(params).then(res => {
        commit('REST_OSS', res);
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
