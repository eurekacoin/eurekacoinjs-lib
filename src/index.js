var eurekacoinjs = require('bitcoinjs-lib')

Object.assign(eurekacoinjs.networks, require('./networks'))

eurekacoinjs.utils = require('./utils')

module.exports = eurekacoinjs