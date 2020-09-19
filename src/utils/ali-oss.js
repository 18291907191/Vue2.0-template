/**
* Date: 2020-09-19 11:46:40
* LastEditors: chaizhiyang(狗尾草)
* LastEditTime: 2020-09-19 11:46:47
* Description: please write description
*/
import http from './request' //接口请求封装

let OSS = require('ali-oss');
import store from '@/store'

/**
 *  [region] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
 *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
 *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
 *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
 */
function ikjOss() {}

ikjOss.prototype.client = function (func) {
  //请求后台获取秘钥
  http.get('/oss/getstsinfo', '').then(res => {
    store.commit('oss/REST_OSS', res)
    console.log(res)
    let client = new OSS({
      region: res.region,
      accessKeyId: res.AccessKeyId,
      accessKeySecret: res.AccessKeySecret,
      bucket: res.img_bucket,
      stsToken: res.SecurityToken
    });
    func(client);
  }).catch(error => {
    console.log('秘钥获取失败')
  })
}

ikjOss.prototype.videoClient = function (func) {
  //请求后台获取秘钥
  http.get('/oss/getstsinfo', '').then(res => {
    store.commit('oss/REST_OSS', res)
    let client = new OSS({
      region: res.region,
      accessKeyId: res.AccessKeyId,
      accessKeySecret: res.AccessKeySecret,
      bucket: res.video_bucket,
      stsToken: res.SecurityToken
    });
    func(client);
  }).catch(error => {
    console.log('秘钥获取失败')
  })
};

const ikj_oss = new ikjOss()

export default ikj_oss
