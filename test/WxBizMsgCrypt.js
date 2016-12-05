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
  it('decrypt', async () => {
    const encoded = `<xml>
<Encrypt><![CDATA[+TW3NAL0lZTyCuJfrjeOkYEjM7wnPdvgAYiEkLnwk/yhu55LsbW/Omb3wulZeQxWEXO7aIvXC3ELlDgqIDvJB5yD0TomFSOei5QrZc9ma+Nta61j1NirSMpcq/L5UjZ47DRKKMHGq9wbxk5YCPsda+4I/v5CfSokOaSkuyaEjnKW0Yj+u9LHbROwkkjk/i5iI3cl6XGFQcLZ59dAX32W/YpkbRdcNBwlfQJhJKEWFlBRsEfr+AxYyZMdO6ylzWYMcbxp63A0J+8dpYlPzRsZdhjk7lRx0wXp0Tji41XfSCci844QChmSphC2yhS4uWF/o3Y7lRBN3H1YZTPXLRqyMCB+wnKsUf9mDO+hNkKcOJQQQhfRIKWIBXmU+VWVN5OOlpcIPpA75TK2FvfTBNUuU/VuUWYxbwcoVcnqkypazfukjRq16nZCVNMEiP8H2hItP8wFXiAltjJitfkkn0R7MPW2If38Z0qyvwpVi/hnAvp84p8AbU/nvKwCzBayxWUzUNH7qVGPigCL7+zTx0moYhrOQXRJ+305hb/5GPR1uIZh8BOA1SnDfJ2934iJFrmK6gSDeSOYlAXbD3gicCugHYC1zjClOKovKHnYJcgVR/os6WROcyJ2GwcvRzrjbffM]]></Encrypt>
<MsgSignature><![CDATA[f62ac9176df0a0e52f60c29055246e0ff96a3b4f]]></MsgSignature>
<TimeStamp>1409304348</TimeStamp>
<Nonce><![CDATA[xxxxxx]]></Nonce>
</xml>`.replace(/[\r\n]/g, '');
    const wx = new WxBizMsgCrypt('pamtest', 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG', 'wxb11529c136998cb6');
    const decoded = await wx.decryptMsg('f62ac9176df0a0e52f60c29055246e0ff96a3b4f', '1409304348', 'xxxxxx', encoded);
    should(decoded).be.exactly('<xml><ToUserName><![CDATA[oia2Tj我是中文jewbmiOUlr6X-1crbLOvLw]]></ToUserName><FromUserName><![CDATA[gh_7f083739789a]]></FromUserName><CreateTime>1407743423</CreateTime><MsgType><![CDATA[video]]></MsgType><Video><MediaId><![CDATA[eYJ1MbwPRJtOvIEabaxHs7TX2D-HV71s79GUxqdUkjm6Gs2Ed1KF3ulAOA9H1xG0]]></MediaId><Title><![CDATA[testCallBackReplyVideo]]></Title><Description><![CDATA[testCallBackReplyVideo]]></Description></Video></xml>');
  });
});