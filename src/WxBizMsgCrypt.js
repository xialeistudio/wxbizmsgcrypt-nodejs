/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
const debug = require('debug')('WxBizMsgCrypt:WxBizMsgCrypt');
import Prpcrypt from './Prpcrypt';

export default class WxBizMsgCrypt {
  /**
   * 构造方法
   * @param token 公众平台上，开发者设置的token
   * @param encodingAesKey 公众平台上，开发者设置的EncodingAESKey
   * @param appId 公众平台的appId
   */
  constructor (token, encodingAesKey, appId) {
    this.token = token;
    this.encodingAesKey = encodingAesKey;
    this.appId = appId;
  }

  /**
   * 加密
   * @param replyMsg
   * @param timestamp
   * @param nonce
   */
  encryptMsg (replyMsg, timestamp, nonce) {
  }
}