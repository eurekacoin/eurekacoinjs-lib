module.exports = {
    eurekacoin: {
        messagePrefix: '\x15EurekaCoin Signed Message:\n',
        bech32: 'erk',
        bip32: {
            public: 0x0489e4ad,
            private: 0x04891eb2
        },
        pubKeyHash: 0x21,
        scriptHash: 0x23,
        wif: 0x3a
    },
    eurekacoin_testnet: {
        messagePrefix: '\x15EurekaCoin Signed Message:\n',
        bech32: 'derk',
        bip32: {
            public: 0x04339483,
            private: 0x0433cf87
        },
        pubKeyHash: 0x5d,
        scriptHash: 0x5f,
        wif: 0x78
    }
}
