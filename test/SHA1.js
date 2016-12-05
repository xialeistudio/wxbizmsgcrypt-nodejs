/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import SHA1 from '../src/SHA1';
import should from 'should';
import {describe, it} from 'mocha';
describe('SHA1', function () {
  it('getSHA1', () => {
    const sign = SHA1.getSHA1('pamtest', '1409304348', 'xxxxxx', 'GzaeD9PifpOXZJMAlR0/eN7JDR8737IwolvwLy6faEAA//rA951iFxifEuUyPZOZbMWUUJ2L3t7mO61RfgQWJoDOCo0u5Rala/gzZNIpxiRx3zSzh3P5NL8o1HcClyjyU9yMoGJ4XNvhxv5ZTMdpLK3RcVfYeNQe0wixBBFy/QuadEpCPr0w+zNyr1Ur6oKRmpG4XHcuLqB9gtBnMexd3vVcy04xaNzBpm/bpj54ITgHlqkM9HM9Kl7f9VDiBbVeJmgvAwDESGWdMs0afvlGdG2olW1v+ScWh0fdDq5v4ZPqN4VcITGO/N/VdO6T/85xUilfPYkV9jp9Arqy6c4vIddQWJKIp2BJ3w0wd1BjEi3Ee8q+tLgZfuDFE5Rv6D9HgYbD4cGE1aY3MeuZ/NzmFpvaror/nU+H5ZPMQzjn7yXBiKonf8LhKWJotknr+N6kZhUmikwgnnuyw4Jx97NOJWxAWufBEFky76yEEUVmw1e4qNhivZiuSq2tHSepK3pVo50U/YS4+WjXDJBhJRDVd3s0wc2nSCY2Syr2pxo/EdKsuGq1+pT+xg3ws2Flkylt0CmmoQHRkT8nKNrYx9dCD0xurjHSlWiQrmzuxyCb17zrcenc1joiqZTJ+608WQYZ');
    should(sign).be.exactly('cc1ed0fe7d262553042464e0945fdd3b119f52d9');
  });
});