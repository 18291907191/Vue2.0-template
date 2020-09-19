/**
* Date: 2020-09-19 12:04:08
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 12:04:11
* Description: please write description
*/
/*
 * @Author: chaizhiyang(狗尾草)
 * @Date: 2020-06-03 19:03:31
 * @LastEditTime: 2020-06-08 11:20:18
 * @LastEditors: chaizhiyang(狗尾草)
 * @Description: 菜单接口 mock
 * @FilePath: /admin-beauty/src/api/system.js
 */ 
import request from '@/utils/request'
const business = 'system';

const SYSTEM = {
  // 查询菜单
  getMenuList(params = {}) {
    return request({
      url: `/${business}/menuList`,
      method: 'get',
      params
    })
  } 
}

export default SYSTEM;