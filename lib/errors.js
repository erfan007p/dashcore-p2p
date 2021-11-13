'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on gobytecore-p2p Module {0}'
};

module.exports = require('@gobytecoin/gobytecore-lib').errors.extend(spec);
