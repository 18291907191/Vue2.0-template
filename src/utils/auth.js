import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setCookie(key, value) {
  return Cookies.set(key, value)
}

export function getCookies(key) {
  return Cookies.get(key)
}

// 获取登录用户userId
export function getUserId(key) {
  return Cookies.get(key);
}