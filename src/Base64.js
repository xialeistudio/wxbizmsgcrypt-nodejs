/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
/**
 * Base64编码，解码
 */
export default class Base64 {
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