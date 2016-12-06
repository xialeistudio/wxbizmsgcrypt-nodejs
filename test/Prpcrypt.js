/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import BufferConverter from '../src/BufferConverter';
import Prpcrypt from '../src/Prpcrypt';
import should from 'should';
import {describe, it} from 'mocha';
describe('Prpcrypt', function () {
  const pc = new Prpcrypt('abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG');
  it('decodeKey', () => {
    should(BufferConverter.converter(pc.key)).be.exactly('abcdefghijklmnopqrstuvwxyz0123456789ABCDEFE=');
  });
  it('getIv', () => {
    should(BufferConverter.converter(pc.getIv())).be.exactly('abcdefghijklmnopqrstug==');
  });
  it('encrypt', () => {
    should(pc.encrypt('a', 'wxb11529c136998cb6')).be.exactly('GzaeD9PifpOXZJMAlR0/eO1Zh/KFWF/wLfN3RrfoLD75bPYiVR/Z3w3RkK8RKFcvO179gZ/sSnUojWC7MlSEmA==');
  });
  it('decrypt', () => {
    const decoded = pc.decrypt('GzaeD9PifpOXZJMAlR0/eN7JDR8737IwolvwLy6faEAA//rA951iFxifEuUyPZOZbMWUUJ2L3t7mO61RfgQWJoDOCo0u5Rala/gzZNIpxiRx3zSzh3P5NL8o1HcClyjyU9yMoGJ4XNvhxv5ZTMdpLK3RcVfYeNQe0wixBBFy/QuadEpCPr0w+zNyr1Ur6oKRmpG4XHcuLqB9gtBnMexd3vVcy04xaNzBpm/bpj54ITgHlqkM9HM9Kl7f9VDiBbVeJmgvAwDESGWdMs0afvlGdG2olW1v+ScWh0fdDq5v4ZPqN4VcITGO/N/VdO6T/85xUilfPYkV9jp9Arqy6c4vIddQWJKIp2BJ3w0wd1BjEi3Ee8q+tLgZfuDFE5Rv6D9HgYbD4cGE1aY3MeuZ/NzmFpvaror/nU+H5ZPMQzjn7yXBiKonf8LhKWJotknr+N6kZhUmikwgnnuyw4Jx97NOJWxAWufBEFky76yEEUVmw1e4qNhivZiuSq2tHSepK3pVo50U/YS4+WjXDJBhJRDVd3s0wc2nSCY2Syr2pxo/EdKsuGq1+pT+xg3ws2Flkylt0CmmoQHRkT8nKNrYx9dCD0xurjHSlWiQrmzuxyCb17zrcenc1joiqZTJ+608WQYZ', 'wxb11529c136998cb6');
    should(decoded).be.exactly('<xml><ToUserName><![CDATA[oia2Tj我是中文jewbmiOUlr6X-1crbLOvLw]]></ToUserName><FromUserName><![CDATA[gh_7f083739789a]]></FromUserName><CreateTime>1407743423</CreateTime><MsgType><![CDATA[video]]></MsgType><Video><MediaId><![CDATA[eYJ1MbwPRJtOvIEabaxHs7TX2D-HV71s79GUxqdUkjm6Gs2Ed1KF3ulAOA9H1xG0]]></MediaId><Title><![CDATA[testCallBackReplyVideo]]></Title><Description><![CDATA[testCallBackReplyVideo]]></Description></Video></xml>');
  });
  it('pack', () => {
    should(Prpcrypt.pack(100, 'base64')).be.exactly('AAAAZA==');
  });
  it('unpack', () => {
    should(Prpcrypt.unpack('AAAAZA==', 'base64')).be.exactly(100);
  });
});