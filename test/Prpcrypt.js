/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import {Base64, PKCS7Encoder} from '../src/Prpcrypt';
import should from 'should';
import fs from 'fs';
import {describe, it} from 'mocha';
describe('Prpcrypt', function () {
  const text = Date.now().toString();
  let encoded = null;
  it('Base64::encode', function () {
    encoded = Base64.encode(text);
  });
  it('Base64::decode', function () {
    should(text).be.exactly(Base64.decode(encoded));
  });
});