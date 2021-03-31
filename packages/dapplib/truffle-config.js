require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict enter occur slab chaos note misery unlock hunt private surge tooth'; 
let testAccounts = [
"0xb485cae00777fae4282b408e9a9b4716462d098b647473315e3f678e301184a9",
"0xfbd26ba0f23d9095b50866768c49f87f4ccb2f756cb5fffebd3f8d3ed5cf119a",
"0x2644e40299e83d48f94d5bb77266e4a68a3a3cc40fdebec027443e1f7b253f40",
"0x807fddc6ca136349c8b530b1048943eef73734ea45be1977de10af2a407e1cc2",
"0x6b59b9d2cdfca7a4dc38a17ad819b96c5fdc804460dc04c4656da9fdd848f0de",
"0x3eda0a7b9e091dbab0e8527066d79c06473eb4c62264a5dfa6d226470a79e46e",
"0xd4f877e30b908f5e8a0e3d046ec48b2e3803f3302b89bd690c92db93c570c5b6",
"0xcc9c764b118c888081ae0e9a02805409b757d3b1e02c760bf1dfd9518264e61e",
"0x046e0a1736c4f37282861f21709247ac98ed4e1b475e687834e49f4f399220d0",
"0xbd7aed1d6302cd9a12461ac9f549792fce46bd48c496c54d898386e48032140b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

