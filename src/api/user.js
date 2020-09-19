import request from '@/utils/request'
const baseUrl = process.env.VUE_APP_BASE_API;

export function userLogin(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

// 用户列表和筛选

export function userList(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params
  })
}

// 注册审核列表
export function checkList(params) {
  return request({
    url: '/user/check/list',
    method: 'get',
    params
  })
}
// 通过邀请码获取管家列表
export function housekeeperListCode(params) {
  return request({
    url: '/housekeeper/invitation/code/list',
    method: 'get',
    params
  })
}


// 具体管家信息
export function housekeeperInfo(params) {
  return request({
    url: '/housekeeper/info',
    method: 'get',
    params
  })
}

// 注册审核修改
export function checkUpdate(params) {
  return request({
    url: '/user/check/update',
    method: 'put',
    params
  })
}

// 基础信息审核列表
export function basicinfoList(params) {
  return request({
    url: '/user/basicinfo/list',
    method: 'get',
    params
  })
}
// 基础信息一键审核通过
export function basicinfoAllcheck(params) {
  return request({
    url: '/user/basicinfo/allcheck',
    method: 'put',
    params
  })
}

// 基础信息一键驳回
export function basicinfoDismissed (params) {
  return request({
    url: '/user/basicinfo/dismissed',
    method: 'put',
    params
  })
}

// 身份认证审核列表

export function userIcardChecklist (params) {
  return request({
    url: '/user/icard/checklist',
    method: 'get',
    params
  })
}
//身份认证审核状态(审核|驳回)
export function userIcardCheckstatus (params) {
  return request({
    url: '/user/icard/checkstatus',
    method: 'put',
    params
  })
}

// 用户账号状态/user/account/status
export function userAccountStatus(params) {
  return request({
    url: '/user/account/status',
    method: 'put',
    params
  })
}

// 用户基础配置信息
export function userConfig(params) {
  return request({
    url: '/user/userconfig',
    method: 'get',
    params
  })
}

// 获取地区
export function userGetareas(params) {
  return request({
    url: '/user/getareas',
    method: 'get',
    params
  })
}

//  用户同步
export function synchronizationUser(params) {
  return request({
    url: '/user/synchronizationUser',
    method: 'put',
    params
  })
}

// 用户认证状态
export function authStatus(params) {
  return request({
    url: '/user/auth/status',
    method: 'post',
    params
  })
}

// 获取用户图片视频

export function userGetImagevideo(params) {
  return request({
    url: '/user/get/imagevideo',
    method: 'get',
    params
  })
}

// 重置密码
export function userResetPassword(params) {
  return request({
    url: '/user/reset/password',
    method: 'put',
    params
  })
}

//用户收益修改
export function userRevenueEdit(params) {
  return request({
    url: '/user/revenue/edit',
    method: 'put',
    params
  })
}

//用户提现明细列表
export function userDetaillist(params) {
  return request({
    url: '/user/cash/detaillist',
    method: 'get',
    params
  })
}
// 提现流水列表查询
export function fetchFlowList(params = {}) {
  return request({
    url: '/user/cash/log',
    method: 'get',
    params
  })
}

// 添加用户
export function addUser(params = {}) {
  return request({
    url: '/user/create',
    method: 'post',
    params
  })
}
// 趣币明细列表
export function revenueDetaillist(params) {
  return request({
    url: '/user/revenue/detaillist',
    method: 'get',
    params
  })
}

// 流水导出
export function exportFlow(params = '[]') {
  return `${baseUrl}/user/cash/export?cashLogId=${params}`;
}
