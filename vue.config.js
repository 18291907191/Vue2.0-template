/**
* Date: 2020-09-25 17:28:30
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-25 18:00:00
* Description: please write description
*/
var path = require('path');
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
    before: process.env.NODE_ENV == 'development' ? require('./mock/mock-server.js') : null
  },
  lintOnSave: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variable.less'),
      ],
    })
}
