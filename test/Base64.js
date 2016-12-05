/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import Base64 from '../src/Base64';
import should from 'should';
import {describe, it} from 'mocha';
describe('Base64', function () {
  const text = 'aaaaaaaa';
  let encoded = null;
  it('encode', () => {
    encoded = Base64.encode(text);
  });
  it('decode', () => {
    should(text).be.exactly(Base64.decode(encoded));
  });
});