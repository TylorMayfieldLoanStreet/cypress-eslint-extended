const globals = require('globals')

module.exports = {
  rules: {
    'no-nth-child': require('./lib/rules/no-nth-child'),
    'describe-link-ticket': require('./lib/rules/describe-link-ticket'),
  },
  configs: {
    recommended: require('./lib/config/recommended'),
  },
  environments: {
    globals: {
      globals: Object.assign({
        cy: false,
        Cypress: false,
        expect: false,
        assert: false,
        chai: false,
      }, globals.browser, globals.mocha),
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
      },
    },
  },
}
