# Frown upon the usage of nchildren in selectors
 * In Cypress, the `nth-child` pseudo-class should be avoided in `cy.get()` selectors, as it can cause issues with elements being reordered or removed from the DOM. Instead, try to use roles via Testing-Library's `findByRole` to uniquely identify elements.
 
 ```
// Bad
  cy.get('#my-list li:nth-child(2)').click();

// Good
  cy.findByRole('listitem', { name: 'Second item in my list' }).click();
```