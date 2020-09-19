/**
* Date: 2020-09-19 10:06:08
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 10:06:10
* Description: please write description
*/
/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}