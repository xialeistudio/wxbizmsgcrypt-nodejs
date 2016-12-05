/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import BufferConverter from './BufferConverter';
import PKCS7Encoder from './PKCS7Encoder';
import mcrypt from 'mcrypt';
export default class Prpcrypt {

  constructor (key) {
    this.key = BufferConverter.converter(key, 'binary', 'base64');
  }

  getIv () {
    return this.key.slice(0, 16);
  }

  /**
   * Pack
   * @param number
   * @param encoding
   * @returns {String}
   */
  pack (number, encoding = 'binary') {
    const buffer = new Buffer(4);
    buffer.writeUInt32BE(number);
    return buffer.toString(encoding);
  }

  /**
   * 加密
   * @param text
   * @param appid
   * @returns {*}
   */
  encrypt (text, appid) {
    const random = this.getRandomString();
    text = random + this.pack(text.length) + text + appid;
    text = PKCS7Encoder.encode(text);
    return this.aes128encrypt(text);
  }

  /**
   * MCRYPT_RIJNDAEL_128,MCRYPT_MODE_CBC
   * @param data
   * @returns {*}
   */
  aes128encrypt (data) {
    const cipher = new mcrypt.MCrypt('rijndael-128', 'cbc');
    cipher.open(new Buffer(this.key, 'binary'), new Buffer(this.getIv(), 'binary'));
    return cipher.encrypt(data).toString('base64');
  }

  /**
   * 随机字符串
   * @param length
   * @returns {string}
   */
  getRandomString (length = 16) {
    return '1111111111111111';
  }
}