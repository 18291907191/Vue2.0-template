/**
* Date: 2020-09-19 12:02:34
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 12:02:36
* Description: please write description
*/
import request from '@/utils/request'

export function getOSS() {
  return request({
    url: '/oss/getstsinfo', // 假地址 自行替换
    method: 'get'
  })
}
