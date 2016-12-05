# WxBizMsgCrypt-NodeJs
NodeJs的微信开放平台消息加解密方案
## 开发背景
NodeJs经过几年的发展，可以说在高并发，高实时性的应用中还是占有一席之地的。拿微信开放平台来说，如果接入消息管理的公众号比较多，而需要保持低延迟响应的话，NodeJs的优势可以说是非常明显的。
## 使用方法
```bash
npm install wxbizmsgcrypt --save
```
+ 消息体加密
```javascript
var WxBizMsgCrypt = require('wxbizmsgcrypt').WxBizMsgCrypt;
var wxbizmsgcrypt = new WxBizMsgCrypt(token,encodingAesKey,appId);
console.log(wxbizmsgcrypt.encryptMsg('待加密文本','时间戳','随机字符串'));
```
+ 消息体解密(由于使用的**xml2js**库来解析XML文档，而**xml2js**解码时使用了回调函数，故本程序在解码XML时使用了Promise包装)
```javascript
var WxBizMsgCrypt = require('wxbizmsgcrypt').WxBizMsgCrypt;
var wxbizmsgcrypt = new WxBizMsgCrypt(token,encodingAesKey,appId);
wxbizmsgcrypt.decryptMsg('msg_signature','时间戳','随机字符串','加密的XML').then(function(xml) {
  console.log(xml);
});
```