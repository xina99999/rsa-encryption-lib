const NodeRSA = require('node-rsa');

class RSAEncryption {
  constructor(keySize = 2048) {
    this.key = new NodeRSA({ b: keySize });
  }

  // Tạo cặp khóa public và private
  generateKeys() {
    this.key.generateKeyPair();
    return {
      publicKey: this.key.exportKey('public'),
      privateKey: this.key.exportKey('private')
    };
  }

  // Mã hóa dữ liệu bằng public key
  encrypt(data, publicKey = null) {
    if (publicKey) {
      const key = new NodeRSA();
      key.importKey(publicKey, 'public');
      return key.encrypt(data, 'base64');
    }
    return this.key.encrypt(data, 'base64');
  }

  // Giải mã dữ liệu bằng private key
  decrypt(encryptedData, privateKey = null) {
    if (privateKey) {
      const key = new NodeRSA();
      key.importKey(privateKey, 'private');
      return key.decrypt(encryptedData, 'utf8');
    }
    return this.key.decrypt(encryptedData, 'utf8');
  }

  // Xuất khóa công khai
  getPublicKey() {
    return this.key.exportKey('public');
  }

  // Xuất khóa bí mật
  getPrivateKey() {
    return this.key.exportKey('private');
  }
}

module.exports = RSAEncryption;