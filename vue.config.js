/**
* Date: 2020-09-19 09:55:30
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 11:12:11
* Description: please write description
*/
module.exports = {
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    before: process.env.NODE_ENV == 'dev' ? require('./mock/mock-server.js') : null
  }
}