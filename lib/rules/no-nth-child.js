'use strict'

module.exports = {
  meta: {
    docs: {
      description: 'Prevent using `cy.get()` with `:nth-child` selectors in Cypress test cases',
      category: 'Possible Errors',
      recommended: true,
    },
    messages: {
      unexpected: 'Avoid using `:nth-child` selectors with `cy.get()` in Cypress tests',
    },
  },

  create (context) {

    function nodeIsCalledByCy (node) {
      if (node.type === 'Identifier' && node.name === 'cy') return true
    
      if (typeof node.callee === 'undefined' || typeof node.callee.object === 'undefined') {
        return false
      }
    
      return nodeIsCalledByCy(node.callee.object)
    }

    function isCallingCyGet (node) {
      return node.callee.type === 'MemberExpression' &&
             nodeIsCalledByCy(node) &&
             node.callee.property.type === 'Identifier' &&
             node.callee.property.name === 'get'
    } 

    function doesArgumentContainNChild (node) {
      return node.arguments.length > 0 &&
             typeof node.arguments[0].value === 'string' &&
             /:nth-child\(/.test(node.arguments[0].value)
    }
    
    return {
      CallExpression (node) {
        if (nodeIsCalledByCy(node)) {
          if(isCallingCyGet(node))
          {
            if (doesArgumentContainNChild(node)) {
              context.report({ node, messageId: 'unexpected' })
            }
          }
        }
      },
    }
  },
}
