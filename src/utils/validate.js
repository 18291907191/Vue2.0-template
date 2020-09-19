/**
* Date: 2020-09-19 11:23:11
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 11:39:04
* Description: 正则校验
*/

// 手机号，固定电话，正整数，限制输入数字，限制输入保留两位小数的价格
// 数字千分位转换，身份证，是否为空，网址，小写字母，大写字母，邮箱，字符串，数组。

/**
 * @description 手机号
 * @param {str} str
 * @returns {Boolean}
 */
export function validPhone(str) {
  return /^1[3-9]\d{9}$/g.test(str);
}

/**
 * @description 固定电话
 * @param {string} tel
 * @returns {Boolean}
 */
export function validTel(tel) {
  return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel);
}

/**
 * @description 正整数
 * @param {number} num
 * @returns {Boolean}
 */
export function validNum(num) {
  return /^\+?[1-9][0-9]*$/g.test(num);
}

/**
 * @description 限制输入数字
 * @param {string} val
 * @returns {Boolean}
 */
export function limitNum(val) {
  return val.replace(/[^\d]/g,'');
}

/**
 * @description 限制输入保留两位小数的价格
 * @param {string} val
 * @returns {Boolean}
 */
export function limitNumPrice(val) {
  return val.replace(/^\+?[1-9]+\.[0-9]{2}$/g, '');
}

/**
 * @description 数字千分位转换
 * @param {number} num
 * @returns {Boolean}
 */
export function changeNumThousand(num) {
  return num.replace(/\d{1,3}(?=(\d{3})+(?:\.\d{1,2})?$)/g, '$&,');
}

/**
 * @description 身份证
 * @param {number} num
 * @returns {Boolean}
 */
export function validIDCard(num) {
  var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  return reg.test(num);
}

/**
 * @description 是否为空
 * @param {string} str
 * @returns {Boolean}
 */
export function isNull(str) {
  return /\S/.test(str);
}

/**
 * @description 网址
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @description 小写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @description 大写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @description 邮箱
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  // /^[\dA-z]+([\-\.\_]?[\da-z]+)*@[\da-z]+([\-\.]?[\da-z]+)*(\.[a-z]{2,})+$/i
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @description 字符串
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @description 数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

