'use strict';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow magic numbers',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: {
              type: 'number',
            },
            uniqueItems: true,
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const configuration = context.options[0] || {};
    const allowedNumbers = new Set(configuration.allow || []);

    function isMagicNumber(node) {
      return node.type === 'Literal' && typeof node.value === 'number' && !allowedNumbers.has(node.value);
    }

    return {
      Literal(node) {
        if (isMagicNumber(node)) {
          context.report({
            node,
            message: 'Magic number {{number}} is not allowed',
            data: {
              number: node.value,
            },
          });
        }
      },
    };
  },
};
