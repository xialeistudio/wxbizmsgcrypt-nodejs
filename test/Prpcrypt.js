/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import BufferConverter from '../src/BufferConverter';
import Prpcrypt from '../src/Prpcrypt';
import should from 'should';
import {describe, it} from 'mocha';
describe('Prpcrypt', function () {
  const pc = new Prpcrypt('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  it('decodeKey', () => {
    should(BufferConverter.converter(pc.key)).be.exactly('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaY=');
  });
  it('getIv', () => {
    should(BufferConverter.converter(pc.getIv())).be.exactly('aaaaaaaaaaaaaaaaaaaaaQ==');
  });
  it('encrypt', () => {
    should(pc.encrypt('aaaaaaaa', 'wxb11529c136998cb6')).be.exactly('A9eZJnaM9Z7D1H5uTsQgRCwwgu/MiXlWGcXLS7nuIskohPxF+GaKuC9EL1C0pw/oQWG15R7sr1LmrL5XvlQelg==');
  });
  it('pack', () => {
    should(pc.pack(100, 'base64')).be.exactly('AAAAZA==');
  });
});