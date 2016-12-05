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
  it('encode', () => {
    encoded = PKCS7Encoder.encode(text);
  });
  it('decode', () => {
    should(text).be.exactly(PKCS7Encoder.decode(encoded));
  });
});