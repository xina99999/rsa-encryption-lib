# rsa-encryption-lib

A lightweight Node.js library for RSA encryption and decryption, providing an easy-to-use API for secure data handling.

## Features
- Generate RSA public/private key pairs with customizable key sizes (default: 2048 bits).
- Encrypt data with a public key and decrypt with a private key.
- Supports both auto-generated and imported keys.
- Encryption outputs base64; decryption returns utf8.

## Installation
```bash
npm install rsa-encryption-lib
```

## Quick Start
```bash
const RSAEncryption = require('rsa-encryption-lib');

// Create an instance
const rsa = new RSAEncryption();

// Generate keys
const keys = rsa.generateKeys();
console.log('Public Key:', keys.publicKey);
console.log('Private Key:', keys.privateKey);

// Encrypt and decrypt
const message = "Hello, World!";
const encrypted = rsa.encrypt(message);
const decrypted = rsa.decrypt(encrypted);
console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);
````

## API Reference

## Advanced Usage
```bash
// Using external keys
const rsa = new RSAEncryption();
const publicKey = "-----BEGIN PUBLIC KEY-----...";
const privateKey = "-----BEGIN PRIVATE KEY-----...";
const encrypted = rsa.encrypt("Secret message", publicKey);
const decrypted = rsa.decrypt(encrypted, privateKey);
```

## Dependencies
- node-rsa - Core RSA implementation.
## Requirements
- Node.js version 12 or higher.
## Installation Notes
- Ensure you have Node.js installed, then run the install command above. No additional setup is required.

## License
- This project is licensed under the MIT License. See the  file for details.

## Contributing
- Contributions are welcome! Please:

## Fork the repository.
- Create a feature branch (git checkout -b feature/new-feature).
- Commit your changes (git commit -m "Add new feature").
- Push to the branch (git push origin feature/new-feature).
- Open a pull request on GitHub.

## Support
- For bugs or questions, file an issue on GitHub or email nhannguyenduytrong@gmail.comcom.

## Changelog
- 1.0.0 (2025-03-24): Initial release with core RSA functionality.
