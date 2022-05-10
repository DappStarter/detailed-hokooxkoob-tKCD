require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember assume hidden kiwi task street'; 
let testAccounts = [
"0x8abfae38c717d47432956557d9ea822a713b727e83171da55c000712b2d0d8ae",
"0x4564901954f3b404c2dace88d6a8619bf57a600df6a192797fc348e9e968a600",
"0x543efc5d74d52963572d8e41679e1b9b721d4d4703d980d24d16ffde64af8bf2",
"0xefecce27d05205758d5da6630d6db1691a66fa7b9753f6ed22462e6c93782a9d",
"0x67922131a2400d6118d51d2290f2279d0e45c204760f3d892ac6e84af2a9962d",
"0x4c364386848ca104514defc51343d9cbb5c4527c94e129a62c15ee2dec0f71d4",
"0xd7288fdddd0a7f42773008bd2ba98267cd3b74f3e2e12201118d7f3aba19320c",
"0xbcb4cd54759fdbe475c057babf6eff0033846cec44948b3f644df127e646fd5d",
"0x57314353c6925050f33a071746e10fe173e0ae508ae0fcac440e2a234adddd84",
"0x4e420a48416dc9bdc4448ade8c978fe03bf9872807ae2422d5a747a4ed3bacc0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

