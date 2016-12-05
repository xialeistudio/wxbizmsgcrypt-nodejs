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
  it('pack', () => {
    should(pc.pack(100, 'base64')).be.exactly('AAAAZA==');
  });
});