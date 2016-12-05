/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import PKCS7Encoder from '../src/PKCS7Encoder';
import should from 'should';
import {describe, it} from 'mocha';
describe('PKCS7Encoder', function () {
  const text = 'aaaaaaaa';
  let encoded = null;
  const pkcs7encoder = new PKCS7Encoder();
  it('encode', () => {
    encoded = pkcs7encoder.encode(text);
  });
  it('decode', () => {
    should(text).be.exactly(pkcs7encoder.decode(encoded));
  });
});