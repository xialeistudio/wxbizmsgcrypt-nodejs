/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 16-12-5
 */
import XMLParser from '../src/XMLParser';
import should from 'should';
import {describe, it} from 'mocha';
describe('XMLParser', function () {
  it('generate', () => {
    const encoded = `<xml>
<Encrypt><![CDATA[GzaeD9PifpOXZJMAlR0/eO1Zh/KFWF/wLfN3RrfoLD75bPYiVR/Z3w3RkK8RKFcvO179gZ/sSnUojWC7MlSEmA==]]></Encrypt>
<MsgSignature><![CDATA[cbc5951ff29fd868d66964ca6712c0be56705e46]]></MsgSignature>
<TimeStamp>1409304348</TimeStamp>
<Nonce><![CDATA[xxxxxx]]></Nonce>
</xml>`;
    should(XMLParser.generate('GzaeD9PifpOXZJMAlR0/eO1Zh/KFWF/wLfN3RrfoLD75bPYiVR/Z3w3RkK8RKFcvO179gZ/sSnUojWC7MlSEmA==', 'cbc5951ff29fd868d66964ca6712c0be56705e46', '1409304348', 'xxxxxx')).be.exactly(encoded);
  });
  it('extract', async () => {
    const encoded = '<xml><ToUserName><![CDATA[oia2Tj我是中文jewbmiOUlr6X-1crbLOvLw]]></ToUserName><FromUserName><![CDATA[gh_7f083739789a]]></FromUserName><CreateTime>1407743423</CreateTime><MsgType><![CDATA[video]]></MsgType><Video><MediaId><![CDATA[eYJ1MbwPRJtOvIEabaxHs7TX2D-HV71s79GUxqdUkjm6Gs2Ed1KF3ulAOA9H1xG0]]></MediaId><Title><![CDATA[testCallBackReplyVideo]]></Title><Description><![CDATA[testCallBackReplyVideo]]></Description></Video></xml>';
    const json = await XMLParser.extrace(encoded);
    should(json.xml.ToUserName).be.exactly('oia2Tj我是中文jewbmiOUlr6X-1crbLOvLw');
  });
});