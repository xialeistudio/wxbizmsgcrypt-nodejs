/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
export default class XMLParser {
  static generate (encrypt, signature, timestamp, nonce) {
    return `<xml>
<Encrypt><![CDATA[${encrypt}]]></Encrypt>
<MsgSignature><![CDATA[${signature}]]></MsgSignature>
<TimeStamp>${timestamp}</TimeStamp>
<Nonce><![CDATA[${nonce}]]></Nonce>
</xml>`;
  }
}