/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
const debug = require('debug')('WxBizMsgCrypt:Prpcrypt');
import crypto from 'crypto';

export class PKCS7Encoder {
  static block_size = 32;

  /**
   * 补位
   * @param text
   * @returns {string}
   */
  encode (text) {
    const text_length = text.length;
    //计算需要填充扽位数
    let amount_to_pad = PKCS7Encoder.block_size - (text_length % PKCS7Encoder.block_size);
    //计算需要填充的位数
    if (amount_to_pad === 0) {
      amount_to_pad = PKCS7Encoder.block_size;
    }

    //获得补位所用的字符
    const pad_chr = String.fromCharCode(amount_to_pad);
    let tmp = '';
    for (let i = 0; i < amount_to_pad; i++) {
      tmp += pad_chr;
    }
    return text + tmp;
  }

  /**
   * 删除补位
   * @param text
   * @returns {string|*}
   */
  decode (text) {
    let pad = text.substr(0, -1).charCodeAt();
    if (pad < 1 || pad > 32) {
      pad = 0;
    }
    return text.substr(0, text.length - pad);
  }
}

export class Base64 {
  /**
   * 编码
   * @param data
   * @param encoding
   * @returns {String}
   */
  static encode (data, encoding = 'base64') {
    return new Buffer(data).toString(encoding);
  }

  /**
   *
   * @param binary
   * @param encoding
   * @returns {String}
   */
  static decode (binary, encoding = 'binary') {
    return new Buffer(binary, 'base64').toString(encoding);
  }
}

// export default class Prpcrypt {
//   /**
//    * 构造方法
//    * @param key
//    */
//   constructor (key) {
//     this.key = Base64.decode(key + '=');
//     debug(Base64.encode(this.key));
//   }
//
//   encrypt (text, appId) {
//     // const random = this.getRandomStr();
//     // text = random + this.pack(text.length) + text + appId;
//     // const pkc_encoder = new PKCS7Encoder();
//     // text = pkc_encoder.encode(text);
//     // debug(base64.fromByteArray(text));
//     // return this.aes256cbcEncode(text);
//   }
//
//   pack (number, encoding = 'binary') {
//     const buffer = new Buffer(4);
//     buffer.writeUInt32BE(number);
//     return buffer.toString(encoding);
//   }
//
//   aes256cbcEncode (data) {
//     debug(this.base64_encode(this.key), this.base64_encode(this.key.substr(0, 16)));
//     const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.key.substr(0, 16));
//     cipher.update(data, 'binary', 'base64');
//     return cipher.final('base64');
//   }
//
//   /**
//    * 16位随机字符串
//    */
//   getRandomStr () {
//     return '1111111111111111';
//     let str = '';
//     const strs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
//     const max = strs.length - 1;
//     for (let i = 0; i < 16; i++) {
//       str += strs[Math.ceil(Math.random() * max)];
//     }
//   }
// }