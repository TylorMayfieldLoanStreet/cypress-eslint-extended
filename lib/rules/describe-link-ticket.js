'use strict'

module.exports = {
  meta: {
    docs: {
      description: 'Enforce `describe` statements to start with a ticket ID in the form of `AQUA-XXX` in Cypress test cases',
      category: 'Possible Errors',
      recommended: true,
    },
    messages: {
      unexpected: '`describe` statements should start with a ticket ID in the form of `AQUA-XXX`',
    },
  },

  create (context) {
    function isDescribeCall (node) {
      return node.callee.name === 'describe'
    }

    return {
      CallExpression (node) {
        if (isDescribeCall(node) && node.arguments.length > 0) {
          const description = node.arguments[0].value
          if (!/^AQUA-\d+/.test(description)) {
            context.report({ node, messageId: 'unexpected' })
          }
        }
      },
    }
  },
}
