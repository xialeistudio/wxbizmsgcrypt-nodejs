/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import BufferConverter from '../src/BufferConverter';
import should from 'should';
import {describe, it} from 'mocha';
describe('BufferConverter', function () {
  //普通字符串转base64
  it('ascii && base64', () => {
    const str = 'aaaaaaaa';
    should(BufferConverter.converter(str, 'base64', 'ascii')).be.exactly('YWFhYWFhYWE=');
    should(BufferConverter.converter('YWFhYWFhYWE=x', 'ascii', 'base64')).be.exactly(str);
  });
  //2进制与base64转换
  it('binary && base64', () => {
    const str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=';
    const binary = BufferConverter.converter(str, 'binary', 'base64');
    should(BufferConverter.converter(binary)).be.exactly('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaY=');
    should(BufferConverter.converter('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaY=', 'binary', 'base64')).be.exactly(binary);
  });
});