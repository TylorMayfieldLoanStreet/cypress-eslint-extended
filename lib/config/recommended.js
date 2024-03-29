'use strict';

module.exports = {
  plugins: ['ls-extended'],
  env: {
    'ls-extended/globals': true,
  },
  rules: {
    'ls-extended/no-nth-child': 'error',
    'ls-extended/no-magic-numbers': 'warn',
  },
};
