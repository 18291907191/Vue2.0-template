/**
* Date: 2020-09-19 11:57:20
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 17:15:09
* Description: please write description
*/
const getters = {
  userInfo: state => state.user,
  device: state => state.app.device,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
