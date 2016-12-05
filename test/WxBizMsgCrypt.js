/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import WxBizMsgCrypt from '../src/WxBizMsgCrypt';
import should from 'should';
import {describe, it} from 'mocha';
describe('WxBizMsgCrypt', function () {
  it('encrypt', () => {
    const wx = new WxBizMsgCrypt('pamtest', 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG', 'wxb11529c136998cb6');
    const encoded = `<xml>
<Encrypt><![CDATA[GzaeD9PifpOXZJMAlR0/eO1Zh/KFWF/wLfN3RrfoLD75bPYiVR/Z3w3RkK8RKFcvO179gZ/sSnUojWC7MlSEmA==]]></Encrypt>
<MsgSignature><![CDATA[cbc5951ff29fd868d66964ca6712c0be56705e46]]></MsgSignature>
<TimeStamp>1409304348</TimeStamp>
<Nonce><![CDATA[xxxxxx]]></Nonce>
</xml>`;
    should(encoded).be.exactly(wx.encryptMsg('a', '1409304348', 'xxxxxx'));
  });
});