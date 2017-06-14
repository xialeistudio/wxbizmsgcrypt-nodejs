/// <reference types="node" />
export class BufferConverter {
    /**
     * buffer编码转换器
     * @param data 带转换数据
     * @param desEncoding 目标编码，默认值base64
     * @param srcEncoding 来源编码，默认值binary
     */
    static converter(data: Buffer | string, desEncoding: string, srcEncoding: string): Buffer | string;
}

/**
 * PKCS7补位
 */
export class PKCS7Encoder {
    /**
     * 编码
     * @param text 待编码数据
     */
    static encode(text: string): string;

    /**
     * 解码
     * @param data 待解码数据
     */
    static decode(data: Buffer): Buffer;
}

export class Prpcrypt {
    /**
     * 打包数据
     * @param number
     * @param encoding
     */
    static pack(number: number, encoding: string): string | Buffer;

    /**
     * 解包
     * @param binary
     * @param encoding
     */
    static unpack(binary: Buffer | string, encoding: string): number;

    /**
     * 获取随机字符串
     * @param length
     */
    static getRandomString(length: number): string;

    /**
     * 构造方法
     * @param key 密钥
     */
    constructor(key: string);

    /**
     * 对key进行补位
     */
    getIv(): Buffer;

    /**
     * 加密
     * @param data
     * @param appid
     */
    encrypt(data: string, appid: string): string;

    /**
     * 解密
     * @param data
     * @param appid
     */
    decrypt(data: string, appid: string): string;

    /**
     * aes128解密
     * @param data
     */
    aes128descrypt(data: Buffer | string): Buffer;

    /**
     * aes128加密
     * @param data
     */
    aes128encrypt(data: Buffer | string): string;
}

export class SHA1 {
    /**
     * 计算数据签名
     * @param token
     * @param timestamp
     * @param nonce
     * @param encrypt_msg
     */
    static getSHA1(token: string, timestamp: number, nonce: string, encrypt_msg: string): string;
}

export class WxBizMsgCrypt {
    /**
     * 构造方法
     * @param token 公众平台上，开发者设置的token
     * @param encodingAesKey 公众平台上，开发者设置的EncodingAESKey
     * @param appId 公众平台的appId
     */
    constructor(token: string, encodingAesKey: string, appId: string);

    /**
     * 加密数据
     * @param replyMsg
     * @param timestamp
     * @param nonce
     */
    encryptMsg(replyMsg: string, timestamp: number, nonce: string): string;

    /**
     * 解密数据
     * @param signature
     * @param timestamp
     * @param nonce
     * @param postData
     */
    decryptMsg(signature: string, timestamp: number, nonce: string, postData: string): string;
}