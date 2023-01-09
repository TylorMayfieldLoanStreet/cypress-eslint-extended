# eslint-plugin-ls-extended
Extended rules for eslint to enforce best practices in Cypress


Linting Rules

This document outlines the custom linting rules for our Cypress project. These rules are in place to ensure that our code is consistent, easy to read, and maintainable.
List of Linting Rules:

1. Include the AQUA ticket ID in describe statements: All describe statements should include a reference to the ticket ID of the feature or bug fix that is being tested. This helps us track the origin of the code and understand the context in which it was written.
2. Avoid using nth-child in Cypress get selectors: In Cypress, the nth-child pseudo-class should be avoided in cy.get() selectors, as it can cause issues with elements being reordered or removed from the DOM. Instead, try to use roles via Testing-Library's findByRole.
